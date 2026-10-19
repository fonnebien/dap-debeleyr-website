export const practice = {
  name: 'DAP De Beleyr',
  url: 'https://dapdebeleyr.be',
  phone: { display: '03 775 20 26', href: 'tel:+3237752026', e164: '+3237752026' },
  mobile: { display: '0475 65 84 33', href: 'tel:+32475658433', e164: '+32475658433' },
  email: 'info@dapdebeleyr.be',
  address: {
    street: 'Grote Baan 304A & 308',
    postalCode: '9120',
    city: 'Beveren',
    routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=Grote+Baan+304A,+9120+Beveren',
  },
} as const;

/** Banner verdwijnt automatisch na deze datum (YYYY-MM-DD, laatste dag inbegrepen, Belgische tijd). */
export const announcement = {
  id: 'mededeling-2026',
  endDate: '2026-10-23',
  summary:
    'Na een operatie aan mijn hand nemen Katrijn en Kimberly de consultaties over. De wachttijd voor routinecontroles en vaccinaties is tijdelijk langer, spoedgevallen helpen we steeds dezelfde of de volgende dag.',
} as const;
