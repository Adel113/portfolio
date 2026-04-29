export default function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-900/10 bg-white/70 px-6 py-6 shadow-[0_18px_45px_rgba(31,36,48,0.08)] backdrop-blur-xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Portfolio</p>
            <p className="mt-2 text-lg font-medium text-ink">Adel Sidi Ahmed</p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Portfolio concu pour presenter clairement mon parcours, mes projets Data / IA dans le cadre de ma recherche d'alternance.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-slate-900/10 pt-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>{new Date().getFullYear()} Tous droits reserves.</span>
          <span>ASA-ALHAADJ</span>
        </div>
      </div>
    </footer>
  );
}
