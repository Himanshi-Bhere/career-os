import Card from "@/components/ui/Card";
const recs = [["▧", "System Design Basics", "Improve your backend skills", "Beginner"], ["👥", "HR Interview Guide", "Crack your HR round", "Guide"]] as const;
export default function LearnNext() {
  return <Card className="p-4"><header className="flex justify-between"><h2 className="font-bold">🎓 Recommended For You</h2><button className="text-xs text-violet-400">View All&nbsp; →</button></header><div className="mt-4 space-y-3">{recs.map(([thumb, title, subtitle, tag]) => <div key={title} className="flex items-center gap-3"><div className="grid h-10 w-16 shrink-0 place-items-center rounded-md bg-slate-200 text-xl text-slate-800">{thumb}</div><div className="min-w-0 flex-1"><p className="text-xs font-bold">{title}</p><p className="mt-1 text-[11px] text-slate-400">{subtitle}</p></div><span className="rounded-full bg-violet-500/15 px-3 py-1 text-[10px] text-violet-400">{tag}</span></div>)}</div></Card>;
}
