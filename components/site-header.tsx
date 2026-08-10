export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#2c1d11]/90 backdrop-blur-md border-b border-amber-500/30 shadow-lg transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo & Markenname */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-400/20 group-hover:border-amber-400 transition-all">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
            </svg>
          </div>
          <div>
            <span className="block text-xl md:text-2xl font-serif font-bold text-[#faf6f0] tracking-wide leading-none group-hover:text-amber-200 transition-colors">
              Schulze
            </span>
            <span className="block text-[10px] text-amber-300/90 tracking-[0.2em] uppercase font-sans mt-1">
              Konditorei • Café • Events
            </span>
          </div>
        </a>

        {/* Die 4 Kernbereiche in warmem Design */}
        <nav className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
          <a
            href="#torten"
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#faf6f0]/90 hover:text-amber-200 hover:bg-white/10 rounded-lg transition-all"
          >
            Torten
          </a>
          <a
            href="#gebaeck"
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#faf6f0]/90 hover:text-amber-200 hover:bg-white/10 rounded-lg transition-all"
          >
            Gebäck
          </a>
          <a
            href="#cafe"
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#faf6f0]/90 hover:text-amber-200 hover:bg-white/10 rounded-lg transition-all"
          >
            Café
          </a>
          <a
            href="#saal"
            className="px-3 py-1.5 text-xs md:text-sm font-medium text-amber-200 hover:bg-amber-400/15 border border-amber-400/40 rounded-lg transition-all"
          >
            Saalvermietung
          </a>
          <a
            href="#kontakt"
            className="ml-2 px-3.5 py-1.5 text-xs md:text-sm font-semibold text-[#2c1d11] bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
