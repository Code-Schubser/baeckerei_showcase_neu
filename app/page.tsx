import Image from "next/image";
import SiteHeader from "@/components/site-header";
import OpeningBadge from "@/components/opening-badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <SiteHeader />

      <main>
        {/* Fullscreen Hero mit Hintergrundbild */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Hintergrundbild */}
          <Image
            src="/image/hero-torte.jpg"
            alt="Feinste Handwerkskunst aus unserer Konditorei"
            fill
            className="object-cover"
            priority
          />

          {/* Dunkler Farbverlauf für perfekte Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/60 to-stone-950/30" />

          {/* Inhalt über dem Bild */}
          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 py-20 text-white">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-amber-400/30 backdrop-blur-sm">
                Feinste Handwerkskunst
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 leading-tight mb-6">
                Süße Kunstwerke, die begeistern.
              </h1>
              <p className="text-stone-200 text-lg mb-8 leading-relaxed">
                Seit 1950 kreieren wir in Spenge feinstes Gebäck, individuelle
                Hochzeitstorten und handgemachte Pralinen – ohne Kompromisse bei
                der Qualität.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="px-6 py-3 bg-amber-500 text-stone-950 font-semibold rounded-xl shadow-lg hover:bg-amber-400 transition-all"
                >
                  Torte anfragen
                </a>
                <a
                  href="#torten"
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  Sortiment ansehen
                </a>
              </div>
            </div>
          </div>

          {/* Dynamisches Öffnungszeiten-Badge */}
          <OpeningBadge />
        </section>
        {/* Elegante Trennlinie */}
        <div className="max-w-6xl mx-auto px-4 my-4">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-900/20 to-transparent" />
        </div>
        {/* 4 Kernbereiche Section */}
        <section id="leistungen" className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-800 text-xs font-semibold tracking-widest uppercase">
              Unser Angebot
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1d11] mt-2 mb-4">
              Handwerk, Genuss & Unvergessliche Momente
            </h2>
            <p className="text-stone-600">
              Von der kleinsten Praline bis zur großen Gesellschaft – wir sorgen
              für den perfekten Rahmen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Karte 1: Torten */}
            <div
              id="torten"
              className="group rounded-2xl bg-white border border-amber-900/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/image/menu-torten.jpg"
                    alt="Hochzeitstorte & Patisserie"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c1d11] mb-2">
                    Torten & Patisserie
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Individuelle Motiv- und Hochzeitstorten sowie feine Törtchen
                    nach Kundenwunsch gefertigt.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Torte anfragen &rarr;
                </a>
              </div>
            </div>

            {/* Karte 2: Gebäck */}
            <div
              id="gebaeck"
              className="group rounded-2xl bg-white border border-amber-900/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/image/menu-gebaeck.jpg"
                    alt="Frisches Gebäck & Croissants"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c1d11] mb-2">
                    Feines Gebäck
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Täglich frische Croissants, knuspriges Kleingebäck und
                    handgemachte Pralinen.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Mehr erfahren &rarr;
                </a>
              </div>
            </div>

            {/* Karte 3: Café */}
            <div
              id="cafe"
              className="group rounded-2xl bg-white border border-amber-900/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/image/menu-cafe.jpg"
                    alt="Kaffeespezialitäten & Café"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c1d11] mb-2">
                    Gemütliches Café
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Röstfrische Kaffeespezialitäten und ein entspanntes Ambiente
                    für Ihr Frühstück.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Tisch reservieren &rarr;
                </a>
              </div>
            </div>

            {/* Karte 4: Saalvermietung */}
            <div
              id="saal"
              className="group rounded-2xl bg-amber-900/5 border border-amber-500/30 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/image/menu-saalvermietung.jpg"
                    alt="Saalvermietung & Events"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#2c1d11] mb-2">
                    Saalvermietung
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Räumlichkeiten für Geburtstage, Taufen und Hochzeiten mit
                    eigenem Catering.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#kontakt"
                  className="text-xs font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Saal anfragen &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Dekorative Trennlinie mit Symbol */}
        <div className="relative py-12 flex items-center justify-center max-w-6xl mx-auto px-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-800/30 to-transparent" />
          </div>
          <div className="relative bg-[#faf6f0] px-4 text-amber-800/60 text-xs tracking-widest uppercase font-serif">
            ❖ ❖ ❖
          </div>
        </div>
        {/* Kontakt, Öffnungszeiten & Standort */}
        <section id="kontakt" className="py-20 bg-[#2c1d11] text-[#faf6f0]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                Besuchen Sie uns
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100 mt-2 mb-4">
                Kontakt & Öffnungszeiten
              </h2>
              <p className="text-stone-300">
                Ob für eine Torte, einen Kaffee im Café oder Fragen zur
                Saalvermietung – wir freuen uns auf Sie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Öffnungszeiten */}
              <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-4a1 1 0 110-2h3V7a1 1 0 112 0v6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">
                  Öffnungszeiten
                </h3>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Di. – Fr.</span>
                    <span className="font-semibold text-amber-200">
                      08:00 – 18:00 Uhr
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Samstag</span>
                    <span className="font-semibold text-amber-200">
                      08:00 – 17:00 Uhr
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sonntag</span>
                    <span className="font-semibold text-amber-200">
                      13:00 – 17:00 Uhr
                    </span>
                  </li>
                  <li className="flex justify-between pt-1 text-stone-400">
                    <span>Montag</span>
                    <span>Ruhetag</span>
                  </li>
                </ul>
              </div>

              {/* Direktkontakt */}
              <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">
                  Kontakt & Anfragen
                </h3>
                <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                  Rufen Sie uns direkt an oder schreiben Sie uns eine E-Mail für
                  Bestellungen und Reservierungen.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+495225123456"
                    className="block w-full text-center px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#2c1d11] font-semibold rounded-xl transition-all shadow-md text-sm"
                  >
                    📞 05225 / 123456
                  </a>
                  <a
                    href="mailto:info@konditorei-schulze.de?subject=Anfrage%20Konditorei"
                    className="block w-full text-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-stone-200 font-semibold rounded-xl border border-white/20 transition-all text-sm"
                  >
                    ✉️ E-Mail senden
                  </a>
                </div>
              </div>

              {/* Adresse & Anfahrt */}
              <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-6">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">
                  Standort
                </h3>
                <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                  Konditorei & Café Schulze
                  <br />
                  Lange Straße 12
                  <br />
                  32139 Spenge
                </p>
                <a
                  href="https://maps.google.com/?q=Spenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 mt-2"
                >
                  In Google Maps öffnen &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#1c120b] border-t border-amber-500/10 py-8 text-stone-400 text-xs">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Konditorei & Café Schulze. Alle
              Rechte vorbehalten.
            </p>

            <div className="flex gap-6">
              <a
                href="/impressum"
                className="hover:text-amber-300 transition-colors"
              >
                Impressum
              </a>
              <a
                href="/datenschutz"
                className="hover:text-amber-300 transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
