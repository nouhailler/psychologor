import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { psychologists } from '../data/psychologists';
import { getPsychologistSync } from '../services/repository';
import { EmptyState } from '../components/ui/EmptyState';
import { Network } from 'lucide-react';
import styles from './InfluenceChain.module.css';

function gradientFor(color: string) {
  return `linear-gradient(155deg, ${color}, color-mix(in srgb, ${color} 55%, #1a1230))`;
}

export function InfluenceChain() {
  const [selectedId, setSelectedId] = useState(psychologists[2]?.id ?? psychologists[0].id);
  const navigate = useNavigate();

  const person = getPsychologistSync(selectedId);
  const influencedBy = person?.influencedByIds.map(getPsychologistSync).filter(Boolean) ?? [];
  const influenced = person?.influencedIds.map(getPsychologistSync).filter(Boolean) ?? [];

  return (
    <div>
      <div className={styles.picker}>
        {psychologists.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`${styles.pickerItem} ${selectedId === p.id ? styles.active : ''}`}
            onClick={() => setSelectedId(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      {!person ? (
        <EmptyState icon={<Network size={22} />} title="Sélectionnez un psychologue" />
      ) : (
        <div className={styles.column}>
          {influencedBy.length > 0 && (
            <>
              <p className={`text-label ${styles.groupLabel}`}>A été influencé par</p>
              <div className={styles.nodeRow}>
                {influencedBy.map(
                  (p) =>
                    p && (
                      <button key={p.id} type="button" className={styles.node} onClick={() => setSelectedId(p.id)}>
                        <span className={styles.avatar} style={{ background: gradientFor(p.accentColor) }}>
                          {p.portraitInitials}
                        </span>
                        {p.name}
                      </button>
                    ),
                )}
              </div>
              <span className={styles.connector} />
            </>
          )}

          <button
            type="button"
            className={`${styles.node} ${styles.center}`}
            onClick={() => navigate(`/psychologues/${person.id}`)}
          >
            <span className={styles.avatar} style={{ background: gradientFor(person.accentColor), width: 40, height: 40 }}>
              {person.portraitInitials}
            </span>
            {person.name}
          </button>

          {influenced.length > 0 && (
            <>
              <span className={styles.connector} />
              <p className={`text-label ${styles.groupLabel}`}>A influencé</p>
              <div className={styles.nodeRow}>
                {influenced.map(
                  (p) =>
                    p && (
                      <button key={p.id} type="button" className={styles.node} onClick={() => setSelectedId(p.id)}>
                        <span className={styles.avatar} style={{ background: gradientFor(p.accentColor) }}>
                          {p.portraitInitials}
                        </span>
                        {p.name}
                      </button>
                    ),
                )}
              </div>
            </>
          )}

          {influencedBy.length === 0 && influenced.length === 0 && (
            <p className="text-body-sm" style={{ marginTop: 'var(--space-4)', textAlign: 'center' }}>
              Aucune relation d'influence directe renseignée dans la base pour cette personne.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
