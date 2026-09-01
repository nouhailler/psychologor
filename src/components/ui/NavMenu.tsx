import { motion } from 'motion/react';
import {
  BookOpen,
  Compass,
  GitCompare,
  History,
  Home,
  Landmark,
  Lightbulb,
  Network,
  Route as RouteIcon,
  Star,
  User,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  onClose: () => void;
}

interface MenuItem {
  to: string;
  label: string;
  description: string;
  icon: typeof Home;
  end?: boolean;
}

const CATEGORIES: { title: string; items: MenuItem[] }[] = [
  {
    title: 'Découvrir',
    items: [
      { to: '/', label: 'Accueil', description: "Vue d'ensemble et suggestions", icon: Home, end: true },
      { to: '/explorer', label: 'Explorer', description: 'Parcourir toute la base', icon: Compass },
      { to: '/psychologues', label: 'Psychologues', description: 'Portraits et biographies', icon: Users },
      { to: '/theories', label: 'Théories', description: 'Grandes théories psychologiques', icon: BookOpen },
      { to: '/courants', label: 'Courants', description: 'Écoles et mouvements de pensée', icon: Landmark },
      { to: '/concepts', label: 'Glossaire des concepts', description: 'Définitions clés', icon: Lightbulb },
    ],
  },
  {
    title: 'Apprendre',
    items: [
      { to: '/parcours', label: 'Parcours guidés', description: 'Cheminements pédagogiques pas à pas', icon: RouteIcon },
      { to: '/chronologie', label: 'Chronologie', description: "L'histoire de la psychologie", icon: History },
    ],
  },
  {
    title: 'Analyser',
    items: [
      { to: '/carte', label: 'Carte des idées', description: 'Visualiser les relations et influences', icon: Network },
      { to: '/comparaison', label: 'Comparaison', description: 'Confronter théories, concepts, psychologues', icon: GitCompare },
    ],
  },
  {
    title: 'Mon espace',
    items: [
      { to: '/favoris', label: 'Favoris', description: 'Vos fiches enregistrées', icon: Star },
      { to: '/profil', label: 'Profil', description: 'Progression et préférences', icon: User },
    ],
  },
];

export function NavMenu({ onClose }: NavMenuProps) {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className={styles.top}>
        <Logo size={26} withWordmark />
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fermer le menu">
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          {CATEGORIES.map((category) => (
            <div key={category.title} className={styles.group}>
              <p className={`text-label ${styles.groupTitle}`}>{category.title}</p>
              <div className={styles.items}>
                {category.items.map(({ to, label, description, icon: Icon, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) => `${styles.item} ${isActive ? styles.itemActive : ''}`}
                  >
                    <span className={styles.itemIcon}>
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <span className={styles.itemText}>
                      <span className={styles.itemLabel}>{label}</span>
                      <span className={styles.itemDescription}>{description}</span>
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.footer}>
            <span className="text-label">Thème</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
