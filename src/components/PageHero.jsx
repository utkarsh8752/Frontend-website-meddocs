export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-24">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=80"
        alt="Medical publishing background"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-teal-50/70" />
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
        {children && <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{children}</p>}
      </div>
    </section>
  );
}
