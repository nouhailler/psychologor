import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  FlaskConical,
  HelpCircle,
  Lightbulb,
  Milestone,
  PartyPopper,
} from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { RelationshipCard } from '../components/cards/RelationshipCard';
import { Button } from '../components/ui/Button';
import { PageLoader } from '../components/ui/PageLoader';
import { useAsync } from '../hooks/useAsync';
import { usePathProgress } from '../hooks/usePathProgress';
import {
  getConceptSync,
  getExperimentSync,
  getPsychologistSync,
  getTheorySync,
  repository,
  resolveStepEntity,
} from '../services/repository';
import { setPathStep, startOrResumePath } from '../services/db';
import type { PathStep } from '../models/types';
import NotFound from './NotFound';
import styles from './PathPlayer.module.css';

function gradientFor(color: string) {
  return `radial-gradient(140% 160% at 15% 0%, ${color} 0%, color-mix(in srgb, ${color} 40%, #120c26) 60%, #0d0920 100%)`;
}

interface Connection {
  id: string;
  name: string;
  subtitle: string;
  href: string;
}

function getStepConnections(step: PathStep): Connection[] {
  const items: Connection[] = [];

  const pushTheory = (id: string) => {
    const t = getTheorySync(id);
    if (t) items.push({ id: t.id, name: t.name, subtitle: 'Théorie', href: `/theories/${t.id}` });
  };
  const pushConcept = (id: string) => {
    const c = getConceptSync(id);
    if (c) items.push({ id: c.id, name: c.term, subtitle: 'Concept', href: `/concepts/${c.id}` });
  };
  const pushPsychologist = (id: string) => {
    const p = getPsychologistSync(id);
    if (p) items.push({ id: p.id, name: p.name, subtitle: 'Psychologue', href: `/psychologues/${p.id}` });
  };

  if (!step.entityId) return [];

  if (step.entityType === 'psychologist') {
    const p = getPsychologistSync(step.entityId);
    p?.theoryIds.forEach(pushTheory);
    p?.conceptIds.forEach(pushConcept);
  } else if (step.entityType === 'theory') {
    const t = getTheorySync(step.entityId);
    t?.psychologistIds.forEach(pushPsychologist);
    t?.conceptIds.forEach(pushConcept);
    t?.relatedTheoryIds.forEach(pushTheory);
  } else if (step.entityType === 'concept') {
    const c = getConceptSync(step.entityId);
    c?.psychologistIds.forEach(pushPsychologist);
    c?.theoryIds.forEach(pushTheory);
    c?.relatedConceptIds.forEach(pushConcept);
  } else if (step.entityType === 'experiment') {
    const e = getExperimentSync(step.entityId);
    e?.psychologistIds.forEach(pushPsychologist);
    e?.theoryIds.forEach(pushTheory);
    e?.conceptIds.forEach(pushConcept);
  }

  return items.slice(0, 5);
}

export default function PathPlayer() {
  const { id = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: path, loading } = useAsync(() => repository.getPath(id), [id]);
  const progress = usePathProgress(id);

  useEffect(() => {
    if (path) startOrResumePath(path.id);
  }, [path]);

  const totalSteps = path?.steps.length ?? 0;
  const requestedStep = Number(searchParams.get('etape'));
  const stepIndex = Number.isFinite(requestedStep) && requestedStep > 0
    ? Math.min(requestedStep - 1, totalSteps)
    : (progress?.currentStepIndex ?? 0);

  const isCompletionScreen = totalSteps > 0 && stepIndex >= totalSteps;
  const currentStep = path && !isCompletionScreen ? path.steps[stepIndex] : undefined;
  const resolvedEntity = useMemo(() => (currentStep ? resolveStepEntity(currentStep) : undefined), [currentStep]);
  const { data: work } = useAsync(
    () => (currentStep?.workId ? repository.getWorksByIds([currentStep.workId]) : Promise.resolve([])),
    [currentStep?.workId],
  );
  const connections = useMemo(() => (currentStep ? getStepConnections(currentStep) : []), [currentStep]);

  const goToStep = (index: number) => {
    const next = new URLSearchParams(searchParams);
    next.set('etape', String(index + 1));
    setSearchParams(next, { replace: false });
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleNext = async () => {
    if (!path || !currentStep) return;
    await setPathStep(path.id, stepIndex + 1, totalSteps, currentStep.id);
    goToStep(stepIndex + 1);
  };

  const handlePrevious = () => {
    if (stepIndex > 0) goToStep(stepIndex - 1);
  };

  if (loading) return <PageLoader />;
  if (!path) return <NotFound />;

  const completedCount = progress?.completedStepIds.length ?? 0;
  const percent = Math.round((Math.min(stepIndex, totalSteps) / totalSteps) * 100);

  return (
    <article>
      <div className={styles.hero} style={{ background: gradientFor(path.accentColor) }}>
        <div className="container-narrow">
          <Link to="/parcours" className={styles.backLink}>
            <ArrowLeft size={16} />
            Parcours guidés
          </Link>
          <h1 className={`text-h2 ${styles.pathTitle}`}>{path.title}</h1>
          <div className={styles.progressRow}>
            <span className={`text-caption ${styles.progressLabel}`}>
              {isCompletionScreen ? `${totalSteps}/${totalSteps}` : `Étape ${stepIndex + 1}/${totalSteps}`}
            </span>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${isCompletionScreen ? 100 : percent}%` }} />
            </div>
          </div>
          <div className={styles.dots}>
            {path.steps.map((s, i) => {
              const isDone = progress?.completedStepIds.includes(s.id);
              const isCurrent = !isCompletionScreen && i === stepIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`${styles.dot} ${isDone ? styles.done : ''} ${isCurrent ? styles.current : ''}`}
                  onClick={() => goToStep(i)}
                  aria-label={`Aller à l'étape ${i + 1}`}
                  aria-current={isCurrent}
                >
                  {isDone ? <Check size={14} /> : i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.body}>
          {isCompletionScreen ? (
            <div className={styles.completionCard}>
              <div className={styles.completionIcon}>
                <PartyPopper size={32} />
              </div>
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-3)' }}>
                Parcours terminé !
              </h2>
              <p className="text-body" style={{ marginBottom: 'var(--space-2)' }}>
                Vous avez parcouru les {totalSteps} étapes de « {path.title} » — {completedCount}/{totalSteps} notions
                validées.
              </p>
              <p className="text-body-sm" style={{ marginBottom: 'var(--space-7)', color: 'var(--color-text-tertiary)' }}>
                Vous pouvez revenir sur une étape à tout moment, ou explorer un autre parcours.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="secondary" onClick={() => goToStep(0)}>
                  Revoir depuis le début
                </Button>
                <Link to="/parcours">
                  <Button variant="primary">Voir tous les parcours</Button>
                </Link>
              </div>
            </div>
          ) : (
            currentStep &&
            resolvedEntity && (
              <div className={styles.stepCard}>
                <div className={styles.entityHeader}>
                  <div
                    className={styles.entityAvatar}
                    style={{ background: `linear-gradient(155deg, ${resolvedEntity.accentColor}, #1a1230)` }}
                  >
                    {resolvedEntity.portraitUrl ? (
                      <img
                        src={resolvedEntity.portraitUrl}
                        alt=""
                        className={styles.entityPhoto}
                      />
                    ) : currentStep.entityType === 'experiment' ? (
                      <FlaskConical size={30} />
                    ) : currentStep.entityType === 'custom' ? (
                      <Milestone size={30} />
                    ) : (
                      resolvedEntity.portraitInitials ?? resolvedEntity.name[0]
                    )}
                  </div>
                  <div>
                    <p className="text-label">{resolvedEntity.typeLabel}</p>
                    <h2 className={`text-h1 ${styles.entityName}`}>{resolvedEntity.name}</h2>
                    {resolvedEntity.href && (
                      <Link to={resolvedEntity.href} className={`text-body-sm ${styles.entityLink}`}>
                        Voir la fiche complète →
                      </Link>
                    )}
                  </div>
                </div>

                {resolvedEntity.description && (
                  <div className={styles.section}>
                    <p className="text-body">{resolvedEntity.description}</p>
                  </div>
                )}

                <div className={styles.section}>
                  <p className={`text-label ${styles.sectionLabel}`}>
                    <Lightbulb size={14} />À retenir
                  </p>
                  <div className={styles.takeawayBlock}>
                    <p className={styles.takeawayText}>{currentStep.keyTakeaway}</p>
                  </div>
                </div>

                {work && work.length > 0 && (
                  <div className={styles.section}>
                    <p className={`text-label ${styles.sectionLabel}`}>
                      <BookOpen size={14} />
                      Une œuvre
                    </p>
                    <div className={styles.workBlock}>
                      <p className="text-h4" style={{ marginBottom: 4 }}>
                        {work[0].title} <span className="text-caption">— {work[0].year}</span>
                      </p>
                      {work[0].description && <p className="text-body-sm">{work[0].description}</p>}
                    </div>
                  </div>
                )}

                {currentStep.reflectionQuestion && (
                  <div className={styles.section}>
                    <p className={`text-label ${styles.sectionLabel}`}>
                      <HelpCircle size={14} />À vous de réfléchir
                    </p>
                    <div className={styles.questionBlock}>
                      <p className={styles.questionText}>{currentStep.reflectionQuestion}</p>
                    </div>
                  </div>
                )}

                {connections.length > 0 && (
                  <div className={styles.section}>
                    <p className={`text-label ${styles.sectionLabel}`}>Connexions à explorer</p>
                    <div className={styles.connectionsGrid}>
                      {connections.map((c) => (
                        <RelationshipCard
                          key={c.id}
                          to={c.href}
                          icon={<span style={{ fontSize: '0.6875rem', fontWeight: 700 }}>{c.subtitle[0]}</span>}
                          title={c.name}
                          subtitle={c.subtitle}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.nav}>
                  <Button variant="secondary" onClick={handlePrevious} disabled={stepIndex === 0}>
                    <ArrowLeft size={16} />
                    Précédent
                  </Button>
                  <Button variant="primary" onClick={handleNext}>
                    {stepIndex === totalSteps - 1 ? 'Terminer le parcours' : 'Étape suivante'}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </article>
  );
}
