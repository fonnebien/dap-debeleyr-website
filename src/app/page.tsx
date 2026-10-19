import { AnnouncementBanner } from '@/components/announcement-banner/AnnouncementBanner';
import { CallBar } from '@/components/call-bar/CallBar';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { AlertIcon, MailIcon, PhoneIcon, RouteIcon } from '@/components/icons/Icons';
import { JsonLd } from '@/components/json-ld/JsonLd';
import { OpeningHours } from '@/components/opening-hours/OpeningHours';
import { practice } from '@/config/practice';
import { practiceJsonLd } from '@/config/structured-data';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <JsonLd data={practiceJsonLd} />
      <div id="top" />
      <AnnouncementBanner />
      <Header />
      <main id="inhoud" className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-titel">
          <div className={styles.heroText}>
            <h1 id="hero-titel">DAP De Beleyr</h1>
            <p>Uw dierenartsenpraktijk gespecialiseerd in kleine huisdieren.</p>
            <div className={styles.actions}>
              <a href={practice.phone.href} className={styles.primaryButton}>
                <PhoneIcon />
                Maak een afspraak
              </a>
              <a href="#openingsuren" className={styles.secondaryButton}>
                Openingsuren
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/vet-office.jpeg"
              alt="Het bord en de ingang van dierenartsenpraktijk DAP De Beleyr in Beveren"
              fill
              priority
              quality={80}
              sizes="(min-width: 1120px) 540px, (min-width: 768px) 48vw, 100vw"
              className={styles.heroPhoto}
            />
          </div>
        </section>

        <section id="openingsuren" className={styles.section} aria-labelledby="openingsuren-titel">
          <h2 id="openingsuren-titel">Openingstijden</h2>
          <div className={styles.callout}>
            <strong>Enkel op afspraak</strong>
            <p>Bij DAP De Beleyr werken we enkel op afspraak.</p>
          </div>
          <OpeningHours />
        </section>

        <section className={styles.emergency} aria-labelledby="spoed-titel">
          <AlertIcon size={32} />
          <div>
            <h2 id="spoed-titel">GSM (zéér dringende gevallen)</h2>
            <a href={practice.mobile.href} className={styles.emergencyButton}>
              <PhoneIcon />
              {practice.mobile.display}
            </a>
          </div>
        </section>

        <section id="contact" className={styles.section} aria-labelledby="contact-titel">
          <h2 id="contact-titel">Contact</h2>
          <div className={styles.contactGrid}>
            <article className={styles.contactCard}>
              <h3>Adres</h3>
              <address>
                DAP De Beleyr <br />
                {practice.address.street} <br />
                {practice.address.postalCode} {practice.address.city}
              </address>
              <a
                href={practice.address.routeUrl}
                className={styles.cardButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RouteIcon />
                Route plannen<span className={styles.srOnly}> (opent in een nieuw tabblad)</span>
              </a>
            </article>
            <article className={styles.contactCard}>
              <h3>Telefoon</h3>
              <p>Voor het maken van een afspraak.</p>
              <a href={practice.phone.href} className={styles.cardButton}>
                <PhoneIcon />
                {practice.phone.display}
              </a>
            </article>
            <article className={styles.contactCard}>
              <h3>E-mail</h3>
              <p>{practice.email}</p>
              <a href={`mailto:${practice.email}`} className={styles.cardButton}>
                <MailIcon />
                E-mail sturen
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
