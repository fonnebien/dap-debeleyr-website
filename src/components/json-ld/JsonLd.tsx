import type { JSX } from 'react';

type JsonLdProps = Readonly<{ data: Readonly<Record<string, unknown>> }>;

/** Rendert structured data; `<` wordt geëscaped zodat de inhoud nooit de script-tag kan afsluiten. */
export function JsonLd({ data }: JsonLdProps): JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
