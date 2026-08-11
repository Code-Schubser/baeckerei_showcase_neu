import SiteHeader from "@/components/site-header";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-stone-900 font-sans">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1d11] mb-8">
          Impressum
        </h1>

        <div className="space-y-8 text-stone-700 leading-relaxed text-sm">
          {/* Anbieter der Website */}
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="font-semibold text-stone-800">
              Konditorei & Café Schulze
            </p>
            <p>
              Inhaber: Max Schulze (Konditormeister)
              <br />
              Lange Straße 12
              <br />
              32139 Spenge
            </p>
          </section>

          {/* Kontakt */}
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: 05225 / 123456
              <br />
              E-Mail: info@konditorei-schulze.de
              <br />
              Website: www.konditorei-schulze.de
            </p>
          </section>

          {/* Berufsbezeichnung & Aufsichtsbehörde */}
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              Berufsrechtliche Angaben
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Berufsbezeichnung:</span>{" "}
              Konditormeister (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="mb-2">
              <span className="font-semibold">Zuständige Kammer:</span>
              <br />
              Handwerkskammer Ostwestfalen-Lippe zu Bielefeld
              <br />
              Obernstraße 48, 33602 Bielefeld
            </p>
            <p>
              <span className="font-semibold">
                Berufsrechtliche Regelungen:
              </span>
              <br />
              Handwerksordnung (HwO) – einsehbar unter:{" "}
              <a
                href="https://www.gesetze-im-internet.de/hwo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline hover:text-amber-600"
              >
                www.gesetze-im-internet.de/hwo
              </a>
            </p>
          </section>

          {/* Steuernummer / USt-ID */}
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              <span className="font-mono text-stone-800">DE 123 456 789</span>
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
