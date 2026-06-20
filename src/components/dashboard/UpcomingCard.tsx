import Card from "@/components/ui/Card";
const events = [
  ["23", "Jun", "TCS Interview", "Technical Round", "Interview", "10:00 AM", "violet"],
  ["25", "Jun", "Microsoft Deadline", "Apply before midnight", "Deadline", "11:59 PM", "amber"],
  ["28", "Jun", "Amazon Assessment", "Online Assessment", "Assessment", "09:00 AM", "blue"],
] as const;
export default function UpcomingCard() {
  return <Card className="p-4"><h2 className="mb-2 font-bold">🗓️ Upcoming Events</h2><div className="divide-y divide-slate-800">{events.map(([day, month, title, info, tag, time, tone]) => <div key={title} className="flex items-center gap-4 py-2"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-violet-500/50 leading-none"><strong>{day}</strong><span className="text-[10px] text-slate-400">{month}</span></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-slate-400">{info}</p></div><div className="text-right"><span className={`rounded-full px-2 py-1 text-[10px] ${tone === 'amber' ? 'bg-amber-500/10 text-amber-400' : tone === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-violet-500/10 text-violet-400'}`}>{tag}</span><p className="mt-1 text-[11px] text-slate-400">{time}</p></div></div>)}</div><button className="block w-full text-center text-xs text-violet-400">View All Events&nbsp; →</button></Card>;
}
