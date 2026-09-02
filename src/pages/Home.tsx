import { Clock, ListChecks, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { FeaturedCard } from '../components/cards/FeaturedCard';
import { PersonCard } from '../components/cards/PersonCard';
import { TheoryCard } from '../components/cards/TheoryCard';
import { TimelineItem } from '../components/cards/TimelineItem';
import { NetworkBackground } from '../components/ui/NetworkBackground';
import { PersonCardSkeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/ui/EmptyState';
import { useAsync } from '../hooks/useAsync';
import { useHistoryList } from '../hooks/useHistory';
import { repository } from '../services/repository';
import { useSearchOverlay } from '../store/SearchOverlayContext';
import { History as HistoryIcon } from 'lucide-react';
import styles from './Home.module.css';

function pathGradient(color: string) {
  return `radial-gradient(140% 160% at 15% 0%, ${color} 0%, color-mix(in srgb, ${color} 40%, #120c26) 60%, #0d0920 100%)`;
}

const FEATURED_PSYCHOLOGIST_ID = 'sigmund-freud';
const SPOTLIGHT_PSYCHOLOGIST_ID = 'carl-gustav-jung';
const SPOTLIGHT_THEORY_ID = 'theorie-de-l-attachement';

export default function Home() {
  const { open } = useSearchOverlay();
  const { data: featured } = useAsync(() => repository.getPsychologist(FEATURED_PSYCHOLOGIST_ID), []);
  const { data: spotlightPerson } = useAsync(() => repository.getPsychologist(SPOTLIGHT_PSYCHOLOGIST_ID), []);
  const { data: spotlightTheory } = useAsync(() => repository.getTheory(SPOTLIGHT_THEORY_ID), []);
  const { data: schools } = useAsync(() => repository.getAllSchools(), []);
  const { data: events } = useAsync(() => repository.getAllEvents(), []);
  const historyRecords = useHistoryList(8);
  const { data: allPsychologists } = useAsync(() => repository.getAllPsychologists(), []);
  const { data: paths } = useAsync(() => repository.getAllPaths(), []);

  const recentEntities = (historyRecords ?? [])
    .filter((h) => h.entityType === 'psychologist')
    .map((h) => allPsychologists?.find((p) => p.id === h.entityId))
    .filter(Boolean);

  return (
    <div>
      <section className={styles.hero}>
        <NetworkBackground className={styles.network} />
        <div className="container">
          <p className={styles.eyebrow}>ENCYCLOPÉDIE INTERACTIVE DE LA PSYCHOLOGIE</p>
          <h1 className={`${styles.title} font-display`}>Psychologor</h1>
          <p className={styles.tagline}>
            Comprendre l'esprit humain. Explorer ses grandes idées — des pionniers de la psychologie
            expérimentale aux thérapies contemporaines, à travers un réseau vivant de personnes, de
            théories et de concepts.
          </p>
          <button type="button" className={styles.searchTrigger} onClick={open}>
            <Search size={22} />
            <span>Rechercher une personne, une théorie ou un concept…</span>
          </button>
        </div>
      </section>

      <div className="container">
        <Section eyebrow="Pédagogie" title="Parcours guidés" action={{ label: 'Voir tous les parcours', to: '/parcours' }}>
          <p className="text-body-sm" style={{ marginBottom: 'var(--space-5)', maxWidth: 640 }}>
            Plutôt que d'explorer seul, laissez-vous guider étape par étape à travers une question ou un courant de
            pensée.
          </p>
          <div className="scroll-row">
            {(paths ?? []).slice(0, 3).map((path) => (
              <Link
                key={path.id}
                to={`/parcours/${path.id}`}
                className={styles.pathCard}
                style={{ background: pathGradient(path.accentColor) }}
              >
                <p className={`text-label ${styles.pathMeta}`}>
                  <ListChecks size={13} style={{ verticalAlign: -2, marginRight: 4 }} />
                  {path.steps.length} étapes
                  <Clock size={13} style={{ verticalAlign: -2, margin: '0 4px 0 10px' }} />
                  {path.estimatedMinutes} min
                </p>
                <h3 className={`text-h4 ${styles.pathTitle}`}>{path.title}</h3>
                <p className={`text-caption ${styles.pathSubtitle}`}>{path.subtitle}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="À la une" title="À découvrir aujourd'hui">
          {featured ? (
            <FeaturedCard
              to={`/psychologues/${featured.id}`}
              eyebrow={featured.schoolIds.length ? 'Portrait' : 'Psychologue'}
              title={featured.name}
              summary={featured.summary}
              accentColor={featured.accentColor}
              meta={<span className="text-body-sm" style={{ color: 'hsl(0 0% 100% / 0.85)' }}>{featured.birth}–{featured.death}</span>}
            />
          ) : (
            <PersonCardSkeleton />
          )}
        </Section>

        <Section eyebrow="Personnalité à découvrir" title="Portrait du moment">
          {spotlightPerson && (
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-6)', alignItems: 'center' }}>
              <div style={{ width: 180 }}>
                <PersonCard psychologist={spotlightPerson} />
              </div>
              <div>
                <p className="text-caption" style={{ marginBottom: 6 }}>
                  {spotlightPerson.birth}–{spotlightPerson.death} · {spotlightPerson.nationality}
                </p>
                <p className="text-body">{spotlightPerson.summary}</p>
                <Link to={`/psychologues/${spotlightPerson.id}`} className="text-body-sm text-accent" style={{ display: 'inline-block', marginTop: 'var(--space-3)', fontWeight: 600 }}>
                  Découvrir sa fiche →
                </Link>
              </div>
            </div>
          )}
        </Section>

        <Section eyebrow="Une théorie en lumière" title="Comprendre une grande idée">
          {spotlightTheory && (
            <div style={{ maxWidth: 640 }}>
              <TheoryCard theory={spotlightTheory} layout="list" />
            </div>
          )}
        </Section>

        <Section eyebrow="Explorer" title="Par courant de pensée" action={{ label: 'Voir tout', to: '/explorer' }}>
          <div className={styles.schoolGrid}>
            {(schools ?? []).map((school) => (
              <Link key={school.id} to={`/theories?courant=${school.id}`} className={styles.schoolCard}>
                <span className={styles.schoolDot} style={{ background: school.color }} />
                <div>
                  <p className="text-h4">{school.shortName}</p>
                  <p className="text-caption">{school.period}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section eyebrow="À travers le temps" title="L'histoire de la psychologie" action={{ label: 'Chronologie complète', to: '/chronologie' }}>
          <div className={styles.timelineRow}>
            {(events ?? []).slice(0, 6).map((event, i, arr) => (
              <div key={event.id} style={{ minWidth: 280 }}>
                <TimelineItem
                  event={event}
                  to={`/evenements/${event.id}`}
                  orientation="horizontal"
                  isLast={i === arr.length - 1}
                />
              </div>
            ))}
          </div>
        </Section>

        {recentEntities.length > 0 && (
          <Section eyebrow="Reprendre" title="Continuer l'exploration">
            <div className="scroll-row">
              {recentEntities.map((p) => p && <PersonCard key={p.id} psychologist={p} />)}
            </div>
          </Section>
        )}

        {recentEntities.length === 0 && historyRecords?.length === 0 && (
          <EmptyState
            icon={<HistoryIcon size={22} />}
            title="Votre exploration commence ici"
            description="Les fiches que vous consultez apparaîtront ici pour vous permettre de reprendre facilement votre lecture."
          />
        )}
      </div>
    </div>
  );
}
