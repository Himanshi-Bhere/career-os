import Link from "next/link";
import { Panel, SectionTitle } from "@/components/ui/Workspace";

const guides = [
  ["Home", "Use it only to decide today&apos;s next move."],
  ["Opportunities", "Search, filter, save, and apply to roles."],
  ["Applications", "Track every role from wishlist to offer or rejected."],
  ["Interviews", "Prepare with company questions and saved practice."],
  ["Resume", "Improve versions before applying to serious roles."],
  ["Analytics", "Review patterns after you have real activity."],
];

export default function HelpPage() {
  return (
    <div className="w-full max-w-[1120px] space-y-4">
      <Panel className="p-6 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-violet-400">Help center</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">Use CareerOS without confusion.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          The app is organized around one simple loop: find roles, apply, track progress, prepare, and improve.
        </p>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <Panel className="p-5">
          <SectionTitle icon="✦" title="Start here" />
          <div className="mt-5 space-y-3 text-sm">
            {["Open Home for today&apos;s focus", "Apply from Opportunities", "Track status in Applications"].map((item, index) => (
              <div key={item} className="flex gap-3 rounded-xl border border-slate-800 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-xs font-black text-violet-300">0{index + 1}</span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <Link href="/home" className="mt-5 inline-flex rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-500">
            Go to Home
          </Link>
        </Panel>

        <Panel className="p-5">
          <SectionTitle icon="?" title="Page guide" description="Each section should do one job only." />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {guides.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-white/[.02] p-4">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel className="p-5">
        <SectionTitle icon="⌕" title="Common questions" />
        <div className="mt-5 grid gap-4 text-sm text-slate-400 md:grid-cols-2">
          <p><span className="font-bold text-slate-200">Can I search any company?</span><br />Yes. After backend, company search will come from the database and support custom companies.</p>
          <p><span className="font-bold text-slate-200">Why is Home simple?</span><br />Because Home should reduce confusion. Analytics and detailed tracking belong on their own pages.</p>
        </div>
      </Panel>
    </div>
  );
}
