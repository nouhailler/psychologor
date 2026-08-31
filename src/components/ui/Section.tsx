import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Section.module.css';

interface SectionProps {
  eyebrow?: string;
  title: string;
  action?: { label: string; to: string };
  children: ReactNode;
  className?: string;
}

export function Section({ eyebrow, title, action, children, className = '' }: SectionProps) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <div>
          {eyebrow && <p className={`text-label ${styles.eyebrow}`}>{eyebrow}</p>}
          <h2 className="text-h2">{title}</h2>
        </div>
        {action && (
          <Link to={action.to} className={styles.link}>
            {action.label}
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
