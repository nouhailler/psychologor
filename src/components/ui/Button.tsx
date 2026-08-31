import { forwardRef, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const sizeClass = size === 'icon' ? styles.icon : size === 'sm' ? styles.sm : styles.md;
    return (
      <button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${sizeClass} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
