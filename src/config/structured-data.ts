import { practice } from './practice';

const description = 'Dierenartsenpraktijk gespecialiseerd in kleine huisdieren. Enkel op afspraak.';

type Slot = Readonly<{ days: readonly string[]; opens: string; closes: string }>;

// Telefonische bereikbaarheid (afspraken), gelijk aan de website; door de praktijk te bevestigen
const phoneHours: readonly Slot[] = [
  { days: ['Monday', 'Tuesday', 'Thursday'], opens: '09:30', closes: '12:15' },
  { days: ['Wednesday', 'Friday'], opens: '09:00', closes: '12:15' },
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '13:30', closes: '17:30' },
  { days: ['Friday'], opens: '13:30', closes: '17:00' },
];

export const practiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  '@id': `${practice.url}/#praktijk`,
  name: practice.name,
  url: practice.url,
  image: `${practice.url}/assets/vet-office.jpeg`,
  logo: `${practice.url}/assets/logo.svg`,
  description,
  telephone: practice.phone.e164,
  email: practice.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Grote Baan 304A',
    postalCode: practice.address.postalCode,
    addressLocality: practice.address.city,
    addressCountry: 'BE',
  },
  openingHoursSpecification: phoneHours.map(({ days, opens, closes }) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: days,
    opens,
    closes,
  })),
} as const;
