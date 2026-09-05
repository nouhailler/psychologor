import { Link } from 'react-router-dom';
import type { Field } from '../../models/types';
import styles from './TheoryCard.module.css';

interface FieldCardProps {
  field: Field;
  layout?: 'grid' | 'list';
}

export function FieldCard({ field, layout = 'grid' }: FieldCardProps) {
  return (
    <Link
      to={`/domaines/${field.id}`}
      className={`${styles.card} ${layout === 'list' ? styles.list : ''}`}
    >
      <span className={styles.dot} style={{ background: field.accentColor }} />
      <p className="text-h4">{field.name}</p>
      <p className={`text-body-sm ${styles.tagline}`}>{field.shortDefinition}</p>
    </Link>
  );
}
