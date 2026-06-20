import Card from "@/components/ui/Card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Card className="p-5">
      <div className="grid gap-5 xl:grid-cols-[1.35fr_1fr_0.85fr]">
        <div className="xl:border-panel xl:border-r xl:pr-6">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-[30px]">👋 Good Evening, Himanshi</h1>
          <p className="mt-1 text-sm text-slate-400">Your career journey is moving forward.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-3"><span className="text-4xl">🔥</span><div><p className="font-bold">7 Day Streak</p><p className="mt-1 text-xs text-slate-400">Keep the momentum going!</p></div></div>
            <div className="flex items-center gap-3"><span className="text-4xl">🎯</span><div><p className="font-bold">Today&apos;s Mission</p><p className="mt-1 text-xs text-slate-400">0 / 3 completed</p></div></div>
          </div>
        </div>

        <div className="xl:border-panel xl:border-r xl:px-2">
          <h2 className="mb-3 text-sm font-bold">Today&apos;s Tasks</h2>
          <div className="space-y-2 text-xs text-slate-300">
            {['Complete 1 application', 'Revise networking for 20 mins', 'Solve 1 interview question'].map((task) => <label key={task} className="flex items-center gap-3"><span className="h-3.5 w-3.5 rounded-sm border border-slate-400" />{task}</label>)}
          </div>
          <div className="mt-4 flex items-center gap-3"><div className="h-1.5 flex-1 rounded-full bg-slate-800"><div className="h-full w-[2%] rounded-full bg-violet-500" /></div><span className="text-xs">0%</span></div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="relative h-28 w-28 shrink-0 rounded-full border-[9px] border-violet-700/60 bg-[#15151e]">
            <Image src="/avatar/mentor.png" alt="Career mentor" fill priority className="rounded-full object-cover" />
            <span className="absolute -bottom-1 -right-4 grid h-10 w-10 place-items-center rounded-full border border-violet-500/50 bg-[#17111e] text-xl">✦</span>
          </div>
          <div><p className="text-sm font-bold">Your Mentor</p><p className="mt-3 max-w-32 text-sm leading-6">“Consistency<br />beats intensity.”</p><button className="mt-3 text-xs font-semibold text-violet-400">View Mentor&nbsp; →</button></div>
        </div>
      </div>
    </Card>
  );
}
