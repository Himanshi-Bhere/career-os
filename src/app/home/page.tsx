import Link from "next/link";
import { Panel, Pill, SectionTitle } from "@/components/ui/Workspace";

const quickMoves = [
  { title: "Find roles", body: "Search and save the best matches.", href: "/opportunities" },
  { title: "Update pipeline", body: "Move applications to the right stage.", href: "/applications" },
  { title: "Prepare interview", body: "Practice for the next company round.", href: "/interviews" },
];

export default function HomePage() {
  return (
    <div className="w-full max-w-[1120px] space-y-4">
      <Panel className="p-6 md:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.24em] text-violet-400">Today</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.035em] md:text-4xl">
              Good evening, Himanshi.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Your main job today is simple: apply to one strong opportunity, then prepare for your next interview.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/opportunities" className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-500">
                Start applying
              </Link>
              <Link href="/help" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 hover:border-violet-500">
                How this works
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-violet-200">Mentor nudge</p>
              <Pill tone="violet">Best next step</Pill>
            </div>
            <p className="mt-3 text-lg font-black">Apply before overthinking.</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Pick one 90%+ match, submit it, then spend 25 minutes on interview practice.
            </p>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <Panel className="p-5">
          <SectionTitle icon="◎" title="Today&apos;s focus" action={<Pill tone="green">2 actions</Pill>} />
          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-slate-800 bg-white/2 p-4">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Action 01</p>
              <h3 className="mt-2 font-bold">Apply to Microsoft Cloud Intern</h3>
              <p className="mt-1 text-sm text-slate-400">Remote role, ₹25,000/month, strong match with your cloud + networking profile.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-white/2 p-4">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Action 02</p>
              <h3 className="mt-2 font-bold">Revise TCS interview basics</h3>
              <p className="mt-1 text-sm text-slate-400">Focus on networking fundamentals and two HR answers.</p>
            </div>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionTitle icon="⌁" title="Upcoming" />
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 p-3">
              <span className="text-slate-400">Microsoft deadline</span>
              <span className="font-bold">Today</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-800 p-3">
              <span className="text-slate-400">TCS prep</span>
              <span className="font-bold">Tomorrow</span>
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {quickMoves.map((item) => (
          <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-700 bg-[#0c1118] p-5 transition hover:border-violet-500 hover:bg-violet-500/10">
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-violet-400">Open →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
