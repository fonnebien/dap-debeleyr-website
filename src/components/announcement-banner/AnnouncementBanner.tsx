'use client';

import { CloseIcon } from '@/components/icons/Icons';
import { announcement } from '@/config/practice';
import type { JSX } from 'react';
import { useState, useSyncExternalStore } from 'react';
import styles from './AnnouncementBanner.module.css';

const storageKey = `announcement-dismissed:${announcement.id}`;

function subscribe(): () => void {
  return () => {};
}

function isExpired(): boolean {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Brussels' }).format(new Date());
  return today > announcement.endDate;
}

function isDismissed(): boolean {
  try {
    return sessionStorage.getItem(storageKey) === '1';
  } catch {
    return false;
  }
}

export function AnnouncementBanner(): JSX.Element | null {
  const [closed, setClosed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // Op de server onzichtbaar; na hydratatie beslissen einddatum en sessionStorage.
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => !isExpired() && !isDismissed(),
    () => false
  );
  const visible = shouldShow && !closed;

  function dismiss(): void {
    setClosed(true);
    try {
      sessionStorage.setItem(storageKey, '1');
    } catch {
      // sessionStorage niet beschikbaar: banner sluit enkel voor deze weergave
    }
  }

  if (!visible) {
    return null;
  }

  return (
    <section className={styles.banner} aria-labelledby="mededeling-titel">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>
            <strong id="mededeling-titel">Belangrijke mededeling:</strong> {announcement.summary}{' '}
            <button
              type="button"
              className={styles.more}
              aria-expanded={expanded}
              aria-controls="mededeling-tekst"
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? 'Lees minder' : 'Lees meer'}
            </button>
          </p>
          {expanded && (
            <div id="mededeling-tekst" className={styles.full}>
              <p>Beste klanten,</p>
              <p>
                Op 23/07/2026 moet ik een operatie ondergaan aan mijn linker hand. Dit betekent dat ikzelf niets zal
                mogen/kunnen doen de volgende 3 maand.
              </p>
              <p>
                Mijn collega’s Katrijn en Kimberly vangen mijn afwezigheid op en zullen jullie huisdieren met evenveel
                kunde en liefde behandelen. Jammer genoeg zal hierdoor de wachttijd voor routinecontroles en vaccinaties
                langer zijn dan normaal.
              </p>
              <p>
                Hou hiermee zeker rekening als jullie huisdier ook mee op vakantie gaat. Zieke dieren en spoedgevallen
                proberen zij zeker de dag zelf, ten laatste de volgende dag, te helpen. In deze periode zal de praktijk
                open zijn tot 18.30.
              </p>
              <p>Gelieve hiermee rekening te houden voor het ophalen van voeding en/of medicatie.</p>
              <p>Bedankt voor jullie begrip!</p>
              <p>Ingrid</p>
            </div>
          )}
        </div>
        <button type="button" className={styles.close} onClick={dismiss} aria-label="Mededeling sluiten">
          <CloseIcon />
        </button>
      </div>
    </section>
  );
}
