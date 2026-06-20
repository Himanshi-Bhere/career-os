import Card from "@/components/ui/Card";
import Image from "next/image";
const jobs = [
  { logo: "/company/microsoft.svg", company: "Microsoft", role: "Cloud Intern • Remote", salary: "₹25,000 / month", match: "92% Match", left: "5 days left" },
  { logo: "/company/tcs.svg", company: "TCS", role: "Network Engineer • Mumbai", salary: "₹6 LPA", match: "88% Match", left: "3 days left" },
];
export default function OpportunityExplorer() {
  return <Card className="flex min-h-[282px] flex-col p-4"><header className="flex items-center justify-between"><h2 className="font-bold">🎯 Opportunity Explorer</h2><button className="text-xs text-violet-400">View All&nbsp; →</button></header><div className="mt-3 divide-y divide-slate-800">{jobs.map(job => <div key={job.company} className="flex gap-3 py-3"><div className="relative h-10 w-10 shrink-0"><Image src={job.logo} alt={`${job.company} logo`} fill className="object-contain" /></div><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><p className="text-sm font-bold">{job.company}</p><p className="text-sm font-bold text-emerald-400">{job.match}</p></div><p className="mt-1 text-xs text-slate-400">{job.role}</p><div className="mt-2 flex justify-between"><span className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px] text-slate-300">{job.salary}</span><span className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px] text-slate-400">{job.left}</span></div></div></div>)}</div><button className="mt-auto text-center text-xs text-violet-400">Explore more opportunities&nbsp; →</button></Card>;
}
