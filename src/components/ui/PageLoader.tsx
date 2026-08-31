import { Logo } from './Logo';

export function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        opacity: 0.6,
      }}
      role="status"
      aria-label="Chargement"
    >
      <Logo size={36} />
    </div>
  );
}
