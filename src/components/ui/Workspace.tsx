import Image from "next/image";

export function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <header className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400">{eyebrow}</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1><p className="mt-2 max-w-2xl text-sm text-slate-400">{description}</p></div>{action}</header>;
}

export function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`border-panel rounded-2xl border bg-[linear-gradient(145deg,#121720,#0a0d13)] shadow-[0_18px_60px_rgba(0,0,0,.22)] ${className}`}>{children}</section>;
}

export function SectionTitle({ icon, title, description, action }: { icon: string; title: string; description?: string; action?: React.ReactNode }) {
  return <div className="flex items-start justify-between gap-3"><div className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/12 text-lg">{icon}</span><div><h2 className="font-bold">{title}</h2>{description && <p className="mt-1 text-xs text-slate-400">{description}</p>}</div></div>{action}</div>;
}

export function Metric({ label, value, detail, tone = "violet" }: { label: string; value: string; detail: string; tone?: "violet" | "green" | "amber" | "blue" }) {
  const colors = { violet: "text-violet-400 bg-violet-500/10", green: "text-emerald-400 bg-emerald-500/10", amber: "text-amber-400 bg-amber-500/10", blue: "text-sky-400 bg-sky-500/10" };
  return <Panel className="p-4"><p className="text-xs text-slate-400">{label}</p><div className="mt-2 flex items-end justify-between"><strong className="text-3xl">{value}</strong><span className={`rounded-full px-2 py-1 text-[10px] ${colors[tone]}`}>{detail}</span></div></Panel>;
}

export function BrandLogo({ company, size = 42 }: { company: "Microsoft" | "TCS" | "Amazon" | "Infosys" | "Google"; size?: number }) {
  const src = `/company/${company.toLowerCase()}.svg`;
  return <div className="relative shrink-0 rounded-xl bg-white/95 p-1.5" style={{ width: size, height: size }}><Image src={src} alt={`${company} logo`} fill className="object-contain p-1.5" /></div>;
}

export function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "violet" | "green" | "amber" | "red" | "blue" }) {
  const colors = { neutral: "border-slate-700 bg-slate-800/50 text-slate-300", violet: "border-violet-500/20 bg-violet-500/10 text-violet-300", green: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300", amber: "border-amber-500/20 bg-amber-500/10 text-amber-300", red: "border-rose-500/20 bg-rose-500/10 text-rose-300", blue: "border-sky-500/20 bg-sky-500/10 text-sky-300" };
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${colors[tone]}`}>{children}</span>;
}

export const primaryButton = "rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-[0_8px_24px_rgba(124,58,237,.25)] transition hover:bg-violet-500";
export const secondaryButton = "rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-violet-500/60 hover:text-white";
export const inputClass = "w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500";
