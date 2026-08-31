import type { CSSProperties } from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'block' | 'text' | 'circle';
  style?: CSSProperties;
  className?: string;
}

export function Skeleton({ width, height, variant = 'block', style, className = '' }: SkeletonProps) {
  const variantClass = variant === 'text' ? styles.text : variant === 'circle' ? styles.circle : '';
  return (
    <div
      className={`${styles.skeleton} ${variantClass} ${className}`}
      style={{ width, height, ...style }}
      aria-hidden="true"
    />
  );
}

export function PersonCardSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Skeleton height={160} />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" width="45%" />
    </div>
  );
}

export function ListRowSkeleton() {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', padding: 'var(--space-3) 0' }}>
      <Skeleton variant="circle" width={48} height={48} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="30%" />
      </div>
    </div>
  );
}
