import { Compass, History, Home, Star, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNav.module.css';

const ITEMS = [
  { to: '/', label: 'Accueil', icon: Home, end: true },
  { to: '/explorer', label: 'Explorer', icon: Compass },
  { to: '/chronologie', label: 'Chronologie', icon: History },
  { to: '/favoris', label: 'Favoris', icon: Star },
  { to: '/profil', label: 'Profil', icon: User },
];

export function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      {ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          {({ isActive }) => (
            <>
              {isActive && <span className={styles.indicator} aria-hidden="true" />}
              <span className={styles.iconWrap}>
                <Icon size={22} strokeWidth={isActive ? 2.3 : 1.8} />
              </span>
              <span>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
