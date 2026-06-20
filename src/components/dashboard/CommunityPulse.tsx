import Card from "@/components/ui/Card";
const posts = [
  ["👩🏻", "ananya_p", "Shared interview experience", "Microsoft • SDE Intern", "2h ago"],
  ["👨🏽", "rahul_net", "Shared salary insight", "TCS • Network Engineer", "4h ago"],
  ["👩🏻", "priya_cloud", "Shared internship journey", "Amazon • Cloud Intern", "6h ago"],
];
export default function CommunityPulse() {
  return <Card className="flex min-h-[282px] flex-col p-4"><header className="flex items-center justify-between"><h2 className="font-bold">🌐 Community Pulse</h2><button className="text-xs text-violet-400">View All&nbsp; →</button></header><div className="mt-3 space-y-3">{posts.map(([avatar, name, action, org, time]) => <div key={name} className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-700 text-xl">{avatar}</span><div className="min-w-0 flex-1"><p className="text-xs font-bold">{name}</p><p className="text-xs text-slate-400">{action}</p><p className="text-xs text-slate-400">{org}</p></div><span className="text-[11px] text-slate-400">{time}</span></div>)}</div><button className="mt-auto text-center text-xs text-violet-400">Join the conversation&nbsp; →</button></Card>;
}
