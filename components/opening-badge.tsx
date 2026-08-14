"use client";

import { useEffect, useState } from "react";

// Öffnungszeiten-Konfiguration:
// 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
const SCHEDULE: Record<number, { open: number; close: number } | null> = {
  0: { open: 9.0, close: 18.0 }, // Sonntag: 09:00 - 18:00
  1: null, // Montag: Ruhetag
  2: { open: 8.5, close: 18.0 }, // Dienstag: 08:30 - 18:00
  3: { open: 8.5, close: 18.0 }, // Mittwoch: 08:30 - 18:00
  4: { open: 8.5, close: 18.0 }, // Donnerstag: 08:30 - 18:00
  5: { open: 8.5, close: 18.0 }, // Freitag: 08:30 - 18:00
  6: { open: 8.0, close: 18.0 }, // Samstag: 08:00 - 18:00
};

export default function OpeningBadge() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState({
    isOpen: false,
    text: "Öffnungszeiten werden geladen...",
    isClosedForDay: false,
  });

  useEffect(() => {
    setMounted(true);

    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const currentTime = now.getHours() + now.getMinutes() / 60;
      const todayHours = SCHEDULE[day];

      if (!todayHours) {
        setStatus({
          isOpen: false,
          text: "Heute Ruhetag (öffnet Di. 08:30)",
          isClosedForDay: true,
        });
        return;
      }

      if (currentTime >= todayHours.open && currentTime < todayHours.close) {
        const closeHour = Math.floor(todayHours.close);
        const closeMinute = Math.round((todayHours.close - closeHour) * 60);
        const closeString = `${String(closeHour).padStart(2, "0")}:${String(closeMinute).padStart(2, "0")}`;

        setStatus({
          isOpen: true,
          text: `Jetzt geöffnet (bis ${closeString} Uhr)`,
          isClosedForDay: false,
        });
      } else if (currentTime < todayHours.open) {
        const openHour = Math.floor(todayHours.open);
        const openMinute = Math.round((todayHours.open - openHour) * 60);
        const openString = `${String(openHour).padStart(2, "0")}:${String(openMinute).padStart(2, "0")}`;

        setStatus({
          isOpen: false,
          text: `Geschlossen (öffnet heute ${openString} Uhr)`,
          isClosedForDay: false,
        });
      } else {
        setStatus({
          isOpen: false,
          text: "Für heute geschlossen",
          isClosedForDay: false,
        });
      }
    };

    checkStatus();
    // Alle 60 Sekunden prüfen, falls der Tab geöffnet bleibt
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Behebt den Hydration-Mismatch (während SSR wird ein neutraler Fallback gezeigt)
  if (!mounted) {
    return (
      <div className="mt-8 inline-flex items-center gap-3 bg-[#1c120b]/60 border border-amber-500/20 backdrop-blur-md px-4 py-2 rounded-full text-xs text-stone-300 shadow-lg">
        <span className="h-2 w-2 rounded-full bg-amber-400/50" />
        <span>Di – So: 08:30 – 18:00 Uhr</span>
      </div>
    );
  }

  return (
    <div className="mt-8 inline-flex items-center gap-3 bg-[#1c120b]/60 border border-amber-500/20 backdrop-blur-md px-4 py-2 rounded-full text-xs text-stone-300 shadow-lg transition-all">
      <span className="flex h-2 w-2 relative">
        {status.isOpen ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </>
        ) : (
          <span
            className={`inline-flex rounded-full h-2 w-2 ${status.isClosedForDay ? "bg-amber-400" : "bg-rose-500"}`}
          ></span>
        )}
      </span>

      <span>
        <strong
          className={
            status.isOpen
              ? "text-emerald-300 font-medium"
              : "text-amber-200 font-medium"
          }
        >
          {status.isOpen ? "Geöffnet:" : "Status:"}
        </strong>{" "}
        {status.text}
      </span>

      <span className="text-stone-500">|</span>
      <a
        href="/#kontakt"
        className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-500/30 transition-colors"
      >
        Alle Zeiten
      </a>
    </div>
  );
}
