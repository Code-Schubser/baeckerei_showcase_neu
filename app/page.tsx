import Image from "next/image";
import SiteHeader from "@/components/site-header";

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
        </section>
      </main>
    </div>
  );
}
