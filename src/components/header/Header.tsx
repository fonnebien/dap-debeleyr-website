import { PhoneIcon } from '@/components/icons/Icons';
import { Logo } from '@/components/logo/Logo';
import { practice } from '@/config/practice';
import type { JSX } from 'react';
import styles from './Header.module.css';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="#top" className={styles.brand} aria-label="DAP De Beleyr, naar boven">
          <Logo size={48} />
          <span className={styles.title}>DAP De Beleyr</span>
        </a>
        <a href={practice.phone.href} className={styles.call}>
          <PhoneIcon />
          <span>
            <span className={styles.callLabel}>Bel </span>
            {practice.phone.display}
          </span>
        </a>
      </div>
    </header>
  );
}
