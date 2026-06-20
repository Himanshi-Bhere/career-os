import Card from "@/components/ui/Card";

type Props = { title: string; value: string; subtitle: string; icon: string; change: string; tone: "green" | "amber" };
export default function StatCard({ title, value, subtitle, icon, change, tone }: Props) {
  return <Card className="p-4"><div className="flex items-center gap-2 font-bold"><span>{icon}</span><h3>{title}</h3></div><div className="mt-2 flex items-end gap-3"><span className="text-[32px] font-bold leading-none">{value}</span><span className="mb-0.5 text-xs text-slate-400">{subtitle}</span><span className={`ml-auto rounded-full px-2 py-1 text-[11px] font-bold ${tone === "green" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>{change}</span></div></Card>;
}
