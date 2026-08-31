interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/**
 * Monogramme Psychologor : un P dont la boucle se referme en spirale/nœud
 * neuronal, évoquant à la fois la lettre, la pensée et la connexion.
 */
export function Logo({ size = 32, withWordmark = false, className }: LogoProps) {
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 6C10 5.44772 10.4477 5 11 5H21.5C27.299 5 32 9.70101 32 15.5C32 21.299 27.299 26 21.5 26H15V34C15 34.5523 14.5523 35 14 35H11C10.4477 35 10 34.5523 10 34V6Z"
          fill="url(#psychologor-gradient)"
        />
        <circle cx="21" cy="15.5" r="6" fill="var(--color-surface)" fillOpacity="0.94" />
        <circle cx="21" cy="15.5" r="2.1" fill="url(#psychologor-gradient)" />
        <circle cx="24.6" cy="11.6" r="1.15" fill="url(#psychologor-gradient)" />
        <circle cx="17.6" cy="12.1" r="1" fill="url(#psychologor-gradient)" />
        <path
          d="M21 15.5L24.6 11.6M21 15.5L17.6 12.1"
          stroke="url(#psychologor-gradient)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="psychologor-gradient" x1="10" y1="5" x2="32" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-primary-light)" />
            <stop offset="1" stopColor="var(--color-primary-dark)" />
          </linearGradient>
        </defs>
      </svg>
      {withWordmark && (
        <span
          className="font-display"
          style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.01em', color: 'var(--color-text)' }}
        >
          Psychologor
        </span>
      )}
    </span>
  );
}
