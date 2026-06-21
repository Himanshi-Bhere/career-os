import Link from "next/link";
import { Panel, SectionTitle } from "@/components/ui/Workspace";

const guides = [
  ["Start your day", "Open Home, complete the top action, then move to Opportunities."],
  ["Find opportunities", "Search roles, filter by remote/package/skills, save good matches, then apply."],
  ["Track applications", "Add every role you apply to and keep the next step updated."],
  ["Prepare interviews", "Use company filters, saved questions, and upcoming interview reminders."],
  ["Improve resume", "Keep versions, review suggestions, and upload the strongest copy before applying."],
  ["Read analytics", "Use analytics after you have real activity; do not optimize too early."],
];

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-[1180px] space-y-4">
      <section className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#121824] to-[#080b10] p-7">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-violet-400">Help center</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em]">How to use CareerOS</h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-400">
          A simple guide for new users. Later this can become an interactive onboarding tour with backend-saved progress.
        </p>
      </section>

      <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
        <Panel>
          <SectionTitle icon="?" title="Quick operating guide" />
          <div className="mt-4 grid gap-3">
            {guides.map(([title, body], index) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-800 bg-white/[.02] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-sm font-black text-violet-300">0{index + 1}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <SectionTitle icon="✦" title="Mentor guidance" />
            <p className="mt-4 text-sm leading-6 text-slate-400">
              The mentor should answer: what should I do next, what am I missing, and which action has the highest impact today?
            </p>
            <Link href="/home" className="mt-5 inline-flex rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white hover:bg-violet-500">
              Go to Home
            </Link>
          </Panel>
          <Panel>
            <SectionTitle icon="⌕" title="Common questions" />
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p><span className="font-bold text-slate-200">Can I search any company?</span><br />Yes, after backend we will search the database and allow custom companies.</p>
              <p><span className="font-bold text-slate-200">Why not open analytics first?</span><br />Analytics matters after real activity. Home and Opportunities should come first.</p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
