import Link from "next/link";
import { Panel, Pill, SectionTitle } from "@/components/ui/Workspace";

const actions = [
  { title: "Apply to 2 strong-match roles", body: "Microsoft Cloud Intern and Infosys Systems Engineer are still open.", href: "/opportunities", label: "Find roles" },
  { title: "Prepare for TCS interview", body: "Revise networking basics and solve 5 common HR questions.", href: "/interviews", label: "Prepare" },
  { title: "Improve Docker skill gap", body: "Finish the Docker fundamentals lesson before tonight.", href: "/learning", label: "Learn" },
];

const timeline = [
  ["Today", "Microsoft deadline", "Apply before midnight"],
  ["Tomorrow", "TCS interview prep", "Technical + HR round"],
  ["This week", "Resume scan", "Improve project descriptions"],
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1280px] space-y-4">
      <section className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#121824] via-[#0c1118] to-[#080b10] p-6 shadow-[0_24px_80px_rgba(0,0,0,.35)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.24em] text-violet-400">Today&apos;s command center</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Good evening, Himanshi. Start with the next best move.</h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Home is intentionally simple: one focus, one opportunity direction, one preparation task, and one learning nudge.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/opportunities" className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-500">Open opportunities</Link>
              <Link href="/applications" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 hover:border-violet-500">Update pipeline</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5">
            <p className="text-sm font-bold text-violet-200">Mentor suggestion</p>
            <p className="mt-3 text-2xl font-black">Apply first, analyze later.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              You have enough prep for two roles. Spend the first 40 minutes applying, then use the evening for interview practice.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
        <Panel>
          <SectionTitle icon="◎" title="Today&apos;s action plan" action={<Pill tone="violet">3 priorities</Pill>} />
          <div className="mt-4 grid gap-3">
            {actions.map((item, index) => (
              <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-white/[.02] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-sm font-black text-violet-300">0{index + 1}</span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                </div>
                <Link href={item.href} className="shrink-0 rounded-xl border border-slate-700 px-4 py-2 text-center text-xs font-bold text-violet-300 hover:border-violet-500">{item.label}</Link>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionTitle icon="⌁" title="What&apos;s coming up" action={<Link href="/applications" className="text-xs font-bold text-violet-400">View all</Link>} />
          <div className="mt-4 space-y-3">
            {timeline.map(([time, title, body]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-white/[.02] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">{time}</p>
                  <Pill>{title}</Pill>
                </div>
                <p className="mt-3 text-sm text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ["Opportunity direction", "Cloud + networking internships are your strongest lane this week.", "/opportunities"],
          ["Resume readiness", "Your projects need clearer impact numbers before serious applications.", "/resume"],
          ["Community nudge", "Read one Microsoft interview experience before applying.", "/community"],
        ].map(([title, body, href]) => (
          <Panel key={title}>
            <h3 className="font-bold">{title}</h3>
            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{body}</p>
            <Link href={href} className="mt-4 inline-flex text-sm font-bold text-violet-400">Open →</Link>
          </Panel>
        ))}
      </div>
    </div>
  );
}
