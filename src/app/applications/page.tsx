"use client";
import { useMemo, useState } from "react";
import { BrandLogo, inputClass, PageHeader, Panel, Pill, primaryButton, secondaryButton, SectionTitle } from "@/components/ui/Workspace";

type Stage = "Wishlist" | "Applied" | "Assessment" | "Interview" | "Offer" | "Rejected";
type Company = "Microsoft" | "Amazon" | "TCS" | "Infosys" | "Google";
type App = { id: number; company: Company; role: string; date: string; stage: Stage; next: string; owner: string; priority: "High" | "Medium" | "Low" };
const stages: Stage[] = ["Wishlist", "Applied", "Assessment", "Interview", "Offer", "Rejected"];
const stageTone: Record<Stage, "neutral" | "blue" | "amber" | "violet" | "green" | "red"> = { Wishlist: "neutral", Applied: "blue", Assessment: "amber", Interview: "violet", Offer: "green", Rejected: "red" };
const seed: App[] = [
  { id: 1, company: "Microsoft", role: "Cloud Intern", date: "23 Jun", stage: "Applied", next: "Follow up on 27 Jun", owner: "Careers site", priority: "High" },
  { id: 2, company: "Amazon", role: "SDE Intern", date: "19 Jun", stage: "Assessment", next: "Online assessment · 28 Jun", owner: "LinkedIn", priority: "High" },
  { id: 3, company: "TCS", role: "Network Engineer", date: "15 Jun", stage: "Interview", next: "Technical round · 30 Jun", owner: "Campus", priority: "High" },
  { id: 4, company: "Infosys", role: "Systems Engineer", date: "08 Jun", stage: "Offer", next: "Respond by 2 Jul", owner: "Referral", priority: "Medium" },
  { id: 5, company: "Google", role: "Frontend Intern", date: "20 Jun", stage: "Wishlist", next: "Tailor resume before applying", owner: "Saved search", priority: "Medium" },
  { id: 6, company: "Amazon", role: "Cloud Support", date: "02 Jun", stage: "Rejected", next: "Archive learning notes", owner: "Wellfound", priority: "Low" },
];

export default function ApplicationsPage() {
  const [apps, setApps] = useState(seed); const [query, setQuery] = useState(""); const [stageFilter, setStageFilter] = useState<Stage | "All">("All");
  const visible = useMemo(() => apps.filter(a => (stageFilter === "All" || a.stage === stageFilter) && `${a.company} ${a.role} ${a.next}`.toLowerCase().includes(query.toLowerCase())), [apps, query, stageFilter]);
  const move = (id: number, delta: number) => setApps(all => all.map(a => a.id === id ? { ...a, stage: stages[Math.max(0, Math.min(stages.length - 1, stages.indexOf(a.stage) + delta))] } : a));
  const due = apps.filter(a => ["Assessment", "Interview", "Offer"].includes(a.stage)).slice(0, 3);

  return <div className="mx-auto max-w-[1320px]"><PageHeader eyebrow="Application CRM" title="What needs my attention?" description="A simpler command center for applications: next actions first, pipeline second, full records below." action={<div className="flex gap-2"><button className={secondaryButton}>↥ Import</button><button className={primaryButton}>＋ Add application</button></div>} />

    <div className="mb-5 grid gap-4 xl:grid-cols-[1.35fr_.9fr]">
      <Panel className="p-5"><SectionTitle icon="▥" title="Pipeline at a glance" description="Compact status overview without the empty board space" /><div className="mt-5 grid gap-3 sm:grid-cols-6">{stages.map(stage => { const count = apps.filter(a => a.stage === stage).length; return <button key={stage} onClick={() => setStageFilter(stageFilter === stage ? "All" : stage)} className={`rounded-2xl border p-3 text-left transition ${stageFilter === stage ? "border-violet-500 bg-violet-500/10" : "border-slate-800 bg-black/10 hover:border-slate-600"}`}><span className="text-2xl font-black">{count}</span><p className="mt-1 text-[11px] text-slate-400">{stage}</p></button>; })}</div><div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">{stages.map(stage => <span key={stage} className={`inline-block h-full ${stage === "Wishlist" ? "bg-slate-500" : stage === "Applied" ? "bg-sky-500" : stage === "Assessment" ? "bg-amber-500" : stage === "Interview" ? "bg-violet-500" : stage === "Offer" ? "bg-emerald-500" : "bg-rose-500"}`} style={{ width: `${100 / stages.length}%` }} />)}</div></Panel>
      <Panel className="p-5"><SectionTitle icon="⚡" title="Next actions" description="The three things to handle first" /> <div className="mt-4 space-y-3">{due.map(a => <div key={a.id} className="flex items-center gap-3 rounded-xl border border-slate-800 p-3"><BrandLogo company={a.company} size={36} /><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">{a.role}</p><p className="truncate text-[11px] text-slate-400">{a.next}</p></div><Pill tone={stageTone[a.stage]}>{a.stage}</Pill></div>)}</div></Panel>
    </div>

    <Panel className="mb-4 p-4"><div className="flex flex-col gap-3 lg:flex-row"><input value={query} onChange={e => setQuery(e.target.value)} className={`${inputClass} flex-1`} placeholder="Search applications, companies, roles, or next steps..." /><select value={stageFilter} onChange={e => setStageFilter(e.target.value as Stage | "All")} className="rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3 text-sm"><option>All</option>{stages.map(s => <option key={s}>{s}</option>)}</select><button className={secondaryButton}>Export CSV</button></div></Panel>

    <Panel className="overflow-hidden"><div className="hidden grid-cols-[1.3fr_.8fr_.8fr_1.15fr_.8fr_130px] gap-4 border-b border-slate-800 px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 lg:grid"><span>Company & Role</span><span>Status</span><span>Applied</span><span>Next step</span><span>Source</span><span>Actions</span></div><div className="divide-y divide-slate-800">{visible.map(a => <div key={a.id} className="grid gap-4 px-5 py-4 lg:grid-cols-[1.3fr_.8fr_.8fr_1.15fr_.8fr_130px] lg:items-center"><div className="flex items-center gap-3"><BrandLogo company={a.company} size={42} /><div><p className="text-sm font-bold">{a.company}</p><p className="text-xs text-slate-400">{a.role}</p></div></div><div><Pill tone={stageTone[a.stage]}>{a.stage}</Pill></div><p className="text-sm text-slate-300">{a.date}</p><p className="text-sm text-slate-400">{a.next}</p><p className="text-xs text-slate-500">{a.owner}</p><div className="flex gap-2"><button onClick={() => move(a.id, -1)} disabled={a.stage === "Wishlist"} className="rounded-lg border border-slate-700 px-2.5 py-1.5 text-xs text-slate-400 disabled:opacity-20">←</button><button onClick={() => move(a.id, 1)} disabled={a.stage === "Rejected"} className="rounded-lg border border-violet-500/40 px-2.5 py-1.5 text-xs font-semibold text-violet-300 disabled:opacity-20">Next</button></div></div>)}</div>{!visible.length && <div className="p-12 text-center text-sm text-slate-500">No applications match this filter.</div>}</Panel>
  </div>;
}
