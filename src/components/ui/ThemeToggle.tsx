import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemeMode } from '../../store/ThemeContext';
import styles from './ThemeToggle.module.css';

const OPTIONS: { mode: ThemeMode; icon: typeof Sun; label: string }[] = [
  { mode: 'light', icon: Sun, label: 'Thème clair' },
  { mode: 'system', icon: Laptop, label: 'Thème système' },
  { mode: 'dark', icon: Moon, label: 'Thème sombre' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.toggle} role="radiogroup" aria-label="Choix du thème">
      {OPTIONS.map(({ mode, icon: Icon, label }) => (
        <button
          key={mode}
          type="button"
          role="radio"
          aria-checked={theme === mode}
          aria-label={label}
          title={label}
          className={`${styles.option} ${theme === mode ? styles.active : ''}`}
          onClick={() => setTheme(mode)}
        >
          <Icon size={16} strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}
