import SiteHeader from "@/components/site-header";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-stone-900 font-sans">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1d11] mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-xs text-amber-800 font-semibold mb-8 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          Hinweis: Dies ist eine Beispiels-Datenschutzerklärung für ein fiktives
          Showcase-Projekt.
        </p>

        <div className="space-y-6 text-stone-700 leading-relaxed text-sm">
          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mb-3">
              <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben
              einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen.
            </p>
            <p>
              <strong>Datenerfassung auf dieser Website:</strong> Die
              Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Diese Website dient ausschließlich
              Demonstrationszwecken und erfasst keine personenbezogenen Daten
              über Formulare oder Tracking-Dienste.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              2. Hosting & Server-Log-Files
            </h2>
            <p className="mb-3">
              Unser Hoster erhebt in sog. Server-Log-Dateien automatisch
              Informationen, die Ihr Browser automatisch an uns übermittelt (z.
              B. IP-Adresse, Dateiaufrufe, Uhrzeit).
            </p>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              3. Analyse-Tools und Cookies
            </h2>
            <p>
              Diese Website verwendet <strong>keine Tracking-Cookies</strong>,
              keine Analyse-Tools (wie Google Analytics) und keine externen
              Skripte von Drittanbietern zur Verhaltensverfolgung.
            </p>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2c1d11] mb-3">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten sowie das Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
