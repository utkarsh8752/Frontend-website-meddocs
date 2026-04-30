export default function SectionHeading({ eyebrow, title, children, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${dark ? 'text-teal-300' : 'text-teal-700'}`}>{eyebrow}</p>
      <h1 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h1>
      {children && <p className={`mt-5 leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{children}</p>}
    </div>
  );
}
