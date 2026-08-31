import { Compass, GitCompare, History, Home, Network, Route as RouteIcon, Star, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import styles from './SideNav.module.css';

const ITEMS = [
  { to: '/', label: 'Accueil', icon: Home, end: true },
  { to: '/explorer', label: 'Explorer', icon: Compass },
  { to: '/parcours', label: 'Parcours guidés', icon: RouteIcon },
  { to: '/chronologie', label: 'Chronologie', icon: History },
  { to: '/carte', label: 'Carte des idées', icon: Network },
  { to: '/comparaison', label: 'Comparaison', icon: GitCompare },
  { to: '/favoris', label: 'Favoris', icon: Star },
  { to: '/profil', label: 'Profil', icon: User },
];

export function SideNav() {
  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <div className={styles.logo}>
        <Logo size={30} withWordmark />
      </div>
      <div className={styles.links}>
        {ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
          >
            <Icon size={19} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </div>
      <div className={styles.footer}>
        <ThemeToggle />
      </div>
    </nav>
  );
}
