import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './FeaturedCard.module.css';

interface FeaturedCardProps {
  to: string;
  eyebrow: string;
  title: string;
  summary: string;
  accentColor: string;
  meta?: ReactNode;
}

export function FeaturedCard({ to, eyebrow, title, summary, accentColor, meta }: FeaturedCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <div
        className={styles.background}
        style={{
          background: `radial-gradient(120% 140% at 15% 10%, ${accentColor} 0%, color-mix(in srgb, ${accentColor} 45%, #140c26) 45%, #0e0a1e 100%)`,
        }}
      />
      <div>
        <p className={`text-label ${styles.eyebrow}`}>{eyebrow}</p>
        <h2 className={`text-h1 ${styles.title}`}>{title}</h2>
        <p className={`text-body ${styles.summary}`}>{summary}</p>
        {meta && <div className={styles.meta}>{meta}</div>}
      </div>
    </Link>
  );
}
