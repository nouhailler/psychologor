import { Link } from 'react-router-dom';
import type { Concept } from '../../models/types';
import styles from '../ui/Chip.module.css';

export function ConceptChip({ concept }: { concept: Concept }) {
  return (
    <Link to={`/concepts/${concept.id}`} className={styles.chip} title={concept.shortDefinition}>
      {concept.term}
    </Link>
  );
}
