'use client';

import { ClockIcon } from '@/components/icons/Icons';
import type { JSX } from 'react';
import { useSyncExternalStore } from 'react';
import styles from './OpeningHours.module.css';

const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'] as const;

type Schedule = Readonly<{ title: string; intro?: string; hours: readonly string[] }>;

const weekdayIndex: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4 };

const schedules: readonly Schedule[] = [
  {
    title: 'Maken van een afspraak',
    intro: 'Telefonisch bereikbaar',
    hours: [
      '09u30 - 12u15 & 13u30 - 17u30',
      '09u30 - 12u15 & 13u30 - 17u30',
      '09u00 - 12u15 & 13u30 - 17u30',
      '09u30 - 12u15 & 13u30 - 17u30',
      '09u00 - 12u15 & 13u30 - 17u',
    ],
  },
  {
    title: 'Consultuur',
    hours: Array<string>(5).fill('11u00 - 12u15 & 16u00 - 17u00'),
  },
  {
    title: 'Ophalen van voeding en/of medicatie',
    hours: [
      '10u45 - 12u15 & 13u30 - 18u30',
      '10u45 - 12u15 & 13u30 - 18u30',
      '10u45 - 12u15 & 13u30 - 18u30',
      '10u45 - 12u15 & 13u30 - 18u30',
      '10u45 - 12u15 & 13u30 - 17u30',
    ],
  },
];

function subscribe(): () => void {
  return () => {};
}

function currentDayIndex(): number | null {
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'Europe/Brussels' }).format(
    new Date()
  );
  return weekdayIndex[weekday] ?? null;
}

export function OpeningHours(): JSX.Element {
  // Op de server is de dag onbekend (null); na hydratatie volgt de markering de Belgische dag.
  const today = useSyncExternalStore(subscribe, currentDayIndex, () => null);

  return (
    <div className={styles.grid}>
      {schedules.map((schedule) => (
        <article key={schedule.title} className={styles.card}>
          <h3 className={styles.title}>
            <ClockIcon size={20} />
            {schedule.title}
          </h3>
          {schedule.intro && <p className={styles.intro}>{schedule.intro}</p>}
          <table className={styles.table}>
            <caption className={styles.srOnly}>{schedule.title}</caption>
            <tbody>
              {days.map((day, index) => (
                <tr key={day} className={today === index ? styles.today : undefined}>
                  <th scope="row">
                    {day}
                    {today === index && <span className={styles.badge}>Vandaag</span>}
                  </th>
                  <td>{schedule.hours[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      ))}
    </div>
  );
}
