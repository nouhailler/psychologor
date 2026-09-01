import { Menu, Search, WifiOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';
import { useIsDesktop } from '../../hooks/useMediaQuery';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useSearchOverlay } from '../../store/SearchOverlayContext';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenMenu: () => void;
}

export function Header({ onOpenMenu }: HeaderProps) {
  const isDesktop = useIsDesktop();
  const online = useOnlineStatus();
  const { open } = useSearchOverlay();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {!isDesktop && (
        <button type="button" className={styles.menuButton} onClick={onOpenMenu} aria-label="Ouvrir le menu">
          <Menu size={22} />
        </button>
      )}
      {!isDesktop && <Logo size={26} />}
      <button type="button" className={styles.searchTrigger} onClick={open}>
        <Search size={17} />
        <span className="text-body-sm">Rechercher une personne, une théorie…</span>
      </button>
      <div className={styles.actions}>
        {!online && (
          <span className={styles.status} title="Vous êtes actuellement hors connexion">
            <WifiOff size={14} />
            Hors connexion
          </span>
        )}
      </div>
    </header>
  );
}
