import type { JSX } from 'react';
import styles from './PlaceholderSection.module.css';

export function PlaceholderSection({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: React.ReactNode }>): JSX.Element {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-titel`}>
      <h2 id={`${id}-titel`}>{title}</h2>
      <div className={styles.placeholder}>{children}</div>
    </section>
  );
}
