import Card from "@/components/ui/Card";
const skills = [["Docker", 40], ["AWS", 60], ["Communication", 75]] as const;
export default function SkillGap() {
  return <Card className="flex min-h-[282px] flex-col p-4"><header className="flex items-center justify-between"><h2 className="font-bold">🧠 Skill Gap</h2><button className="text-xs text-violet-400">Improve&nbsp; →</button></header><div className="mt-5 space-y-5">{skills.map(([name, value]) => <div key={name}><div className="mb-2 flex justify-between text-sm font-semibold"><span>{name}</span><span>{value}%</span></div><div className="h-1.5 rounded-full bg-slate-800"><div className="h-full rounded-full bg-violet-500" style={{ width: `${value}%` }} /></div></div>)}</div><button className="mt-auto text-center text-xs text-violet-400">View all skills&nbsp; →</button></Card>;
}
