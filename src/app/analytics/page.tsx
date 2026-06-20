import { PageHeader, Panel, Pill, secondaryButton, SectionTitle } from "@/components/ui/Workspace";

const funnel = [
  { label: "Discovered", value: 84, width: "100%", color: "bg-slate-500" },
  { label: "Shortlisted", value: 31, width: "78%", color: "bg-sky-500" },
  { label: "Applied", value: 12, width: "58%", color: "bg-violet-500" },
  { label: "Interview", value: 4, width: "40%", color: "bg-fuchsia-500" },
  { label: "Offer", value: 1, width: "24%", color: "bg-emerald-500" },
];

const heat = [0,1,0,2,3,1,0, 1,2,1,3,4,2,1, 0,1,3,2,4,3,0, 2,3,2,4,4,2,1, 1,2,4,3,4,1,0, 0,3,2,4,3,2,1, 2,4,3,4,4,3,1];
const heatColors = ["bg-slate-800", "bg-violet-950", "bg-violet-800", "bg-violet-600", "bg-violet-400"];

export default function AnalyticsPage() {
  return <div className="mx-auto max-w-[1320px]">
    <PageHeader eyebrow="Career Intelligence" title="What is actually improving?" description="A diagnostic view of where momentum becomes opportunity—and where your process currently leaks." action={<button className={secondaryButton}>Apr 1 – Jun 30⌄</button>} />

    <div className="mb-5 grid gap-4 xl:grid-cols-[0.9fr_1.5fr]">
      <Panel className="relative overflow-hidden p-6">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl" />
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Career momentum index</p>
        <div className="mt-6 flex items-center gap-6">
          <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(#8b5cf6_0_73%,#202735_73%)]">
            <div className="grid h-[112px] w-[112px] place-items-center rounded-full bg-[#0d1117] text-center"><div><strong className="text-4xl">73</strong><p className="text-[10px] text-slate-500">of 100</p></div></div>
          </div>
          <div><Pill tone="green">↑ 11 points</Pill><h2 className="mt-3 text-xl font-bold">Momentum is building</h2><p className="mt-2 text-xs leading-5 text-slate-400">Your preparation is converting into interviews. Application selectivity is now the main constraint.</p></div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-800 pt-5 text-center"><div><strong>33%</strong><p className="text-[10px] text-slate-500">Interview rate</p></div><div><strong>6.2d</strong><p className="text-[10px] text-slate-500">Avg. response</p></div><div><strong>81%</strong><p className="text-[10px] text-slate-500">Role alignment</p></div></div>
      </Panel>

      <Panel className="p-6"><SectionTitle icon="⇢" title="Opportunity Conversion Funnel" description="Where candidates move forward—and where they drop" action={<Pill tone="violet">1 offer from 12 applications</Pill>} />
        <div className="mt-6 space-y-2">{funnel.map((x, i) => <div key={x.label} className="flex items-center gap-4"><span className="w-20 text-right text-[11px] text-slate-400">{x.label}</span><div className="flex-1"><div className={`flex h-8 items-center justify-between rounded-r-lg px-3 ${x.color}`} style={{ width: x.width }}><strong className="text-xs">{x.value}</strong>{i > 0 && <span className="text-[9px] text-white/80">{Math.round((x.value / funnel[i - 1].value) * 100)}% converted</span>}</div></div></div>)}</div>
        <p className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-amber-200"><strong>Largest leak:</strong> Only 37% of shortlisted roles become applications. Your saved-role follow-through needs attention.</p>
      </Panel>
    </div>

    <div className="mb-5 grid gap-4 xl:grid-cols-[1.25fr_1fr_1fr]">
      <Panel className="p-5"><SectionTitle icon="▦" title="Consistency Map" description="Meaningful career actions over the last 7 weeks" />
        <div className="mt-6 flex gap-3"><div className="grid grid-rows-7 gap-1 text-[9px] text-slate-600"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div className="grid flex-1 grid-flow-col grid-rows-7 gap-1">{heat.map((v, i) => <span key={i} title={`${v} activities`} className={`aspect-square min-h-3 rounded-[3px] ${heatColors[v]}`} />)}</div></div>
        <div className="mt-5 flex items-center justify-between"><p className="text-xs text-slate-400"><strong className="text-white">Thursday</strong> is your most consistent day.</p><div className="flex items-center gap-1 text-[9px] text-slate-600"><span>Less</span>{heatColors.map(c => <i key={c} className={`h-2.5 w-2.5 rounded-sm ${c}`} />)}<span>More</span></div></div>
      </Panel>

      <Panel className="p-5"><SectionTitle icon="⏱" title="Response Timing" description="Days from application to first response" />
        <div className="mt-6 space-y-5">{([["Microsoft", 4, "w-[36%]", "text-emerald-400"], ["Amazon", 7, "w-[64%]", "text-sky-400"], ["TCS", 11, "w-full", "text-amber-400"]] as const).map(([name, days, width, color]) => <div key={name}><div className="mb-2 flex justify-between text-xs"><span>{name}</span><strong className={color}>{days} days</strong></div><div className="h-2 rounded-full bg-slate-800"><div className={`h-full rounded-full bg-gradient-to-r from-violet-600 to-sky-400 ${width}`} /></div></div>)}</div>
        <p className="mt-6 text-[11px] leading-5 text-slate-500">Your fastest responses come from applications submitted within 48 hours of posting.</p>
      </Panel>

      <Panel className="p-5"><SectionTitle icon="◎" title="Role Fit vs Outcome" description="Does a stronger match improve results?" />
        <div className="relative mt-5 h-40 border-b border-l border-slate-700"><span className="absolute -left-1 bottom-[25%] h-3 w-3 rounded-full bg-slate-500" /><span className="absolute left-[26%] bottom-[42%] h-4 w-4 rounded-full bg-sky-500" /><span className="absolute left-[55%] bottom-[62%] h-5 w-5 rounded-full bg-violet-500" /><span className="absolute right-[8%] top-[8%] h-6 w-6 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.5)]" /><span className="absolute bottom-1 right-2 text-[9px] text-slate-600">Higher match →</span><span className="absolute left-2 top-2 text-[9px] text-slate-600">Better outcome</span></div>
        <p className="mt-4 text-xs text-slate-400">Roles above <strong className="text-white">85% match</strong> are 2.4× more likely to reach interview.</p>
      </Panel>
    </div>

    <div className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
      <Panel className="p-5"><SectionTitle icon="↗" title="Application Source Quality" description="Not every job board produces the same outcomes" />
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[580px] text-left text-xs"><thead className="border-b border-slate-800 text-[10px] uppercase tracking-wider text-slate-500"><tr><th className="pb-3">Source</th><th className="pb-3">Applied</th><th className="pb-3">Responses</th><th className="pb-3">Interviews</th><th className="pb-3">Quality</th></tr></thead><tbody className="divide-y divide-slate-800">{[["Direct company careers", 4, 3, 2, "Excellent"], ["LinkedIn", 5, 2, 1, "Good"], ["Campus portal", 2, 1, 1, "Good"], ["Referral", 1, 1, 0, "Promising"]].map(([source, applied, responses, interviews, quality]) => <tr key={source as string}><td className="py-4 font-semibold">{source}</td><td>{applied}</td><td>{responses}</td><td>{interviews}</td><td><Pill tone={quality === "Excellent" ? "green" : "violet"}>{quality}</Pill></td></tr>)}</tbody></table></div>
      </Panel>

      <Panel className="p-5"><SectionTitle icon="✦" title="What the data suggests" description="Three actions with the highest expected impact" />
        <div className="mt-5 space-y-3">{[
          ["01", "Apply within 48 hours", "Early applications produced 67% of your interview calls."],
          ["02", "Clear your saved-role backlog", "Eight strong-fit opportunities were saved but never submitted."],
          ["03", "Prioritize 85%+ matches", "These roles are converting at more than twice your baseline."],
        ].map(([n, title, body]) => <div key={n} className="flex gap-3 rounded-xl border border-slate-800 p-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-400">{n}</span><div><p className="text-xs font-bold">{title}</p><p className="mt-1 text-[11px] leading-5 text-slate-500">{body}</p></div></div>)}</div>
      </Panel>
    </div>
  </div>;
}
