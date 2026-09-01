import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { SideNav } from './SideNav';
import { Header } from './Header';
import { SearchOverlay } from '../ui/SearchOverlay';
import { NavMenu } from '../ui/NavMenu';
import { useIsDesktop } from '../../hooks/useMediaQuery';
import { useSearchOverlay } from '../../store/SearchOverlayContext';
import styles from './AppShell.module.css';

export function AppShell() {
  const isDesktop = useIsDesktop();
  const { isOpen, close } = useSearchOverlay();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={styles.shell}>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      {isDesktop && <SideNav />}
      <div className={styles.main}>
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <main id="main-content" className={styles.content} key={location.pathname} tabIndex={-1}>
          <Outlet />
        </main>
        {!isDesktop && <BottomNav />}
      </div>
      {isOpen && <SearchOverlay onClose={close} />}
      {menuOpen && <NavMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}
