import { PhoneIcon } from '@/components/icons/Icons';
import { practice } from '@/config/practice';
import type { JSX } from 'react';
import styles from './CallBar.module.css';

/** Vaste belbalk onderaan, enkel zichtbaar op mobiel. */
export function CallBar(): JSX.Element {
  return (
    <div className={styles.bar}>
      <a href={practice.phone.href} className={styles.call}>
        <PhoneIcon size={22} />
        Bel {practice.phone.display}
      </a>
    </div>
  );
}
