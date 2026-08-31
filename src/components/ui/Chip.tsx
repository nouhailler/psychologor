import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Chip.module.css';

interface ChipBaseProps {
  children: ReactNode;
  variant?: 'brand' | 'neutral' | 'selected';
  icon?: ReactNode;
}

function classNames(variant: ChipBaseProps['variant']) {
  return [styles.chip, variant === 'neutral' ? styles.neutral : '', variant === 'selected' ? styles.selected : '']
    .filter(Boolean)
    .join(' ');
}

export function Chip({
  children,
  variant = 'brand',
  icon,
  to,
  ...rest
}: ChipBaseProps & { to?: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (to) {
    return (
      <Link to={to} className={classNames(variant)} {...rest}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <span className={classNames(variant)}>
      {icon}
      {children}
    </span>
  );
}

export function ChipButton({
  children,
  variant = 'neutral',
  icon,
  ...rest
}: ChipBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={classNames(variant)} {...rest}>
      {icon}
      {children}
    </button>
  );
}
