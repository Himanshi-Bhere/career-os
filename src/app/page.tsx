import Image from "next/image";
import Link from "next/link";

const features = [
  ["Discover with confidence", "Rank opportunities by skill fit, work mode, deadline, and the career direction you choose."],
  ["Never lose an application", "Keep every application, assessment, interview, and offer in one dependable pipeline."],
  ["Prepare with context", "Practice company-specific questions and learn from verified student experiences."],
  ["Improve what matters", "See where your process converts, where it leaks, and which next action has the highest impact."],
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
          <span className="text-3xl text-violet-400">✦</span>CareerOS
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#students" className="hover:text-white">For students</a>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white">Log in</Link>
          <Link href="/signup" className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold shadow-[0_10px_30px_rgba(124,58,237,.3)] hover:bg-violet-500">Get started</Link>
        </div>
      </nav>

      <section className="relative mx-auto max-w-[1180px] px-5 pb-24 pt-20 text-center">
        <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="relative z-10">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold text-violet-300">
            THE CAREER WORKSPACE FOR AMBITIOUS STUDENTS
          </span>
          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.045em] sm:text-7xl">
            Turn career chaos into<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">a clear next move.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Discover the right roles, track every application, prepare for interviews, and understand your progress without juggling six different tools.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/signup" className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold shadow-[0_12px_35px_rgba(124,58,237,.35)] hover:bg-violet-500">
              Build your CareerOS →
            </Link>
            <a href="#product" className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold hover:border-violet-500">
              Explore features
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-600">Free for students · No credit card required</p>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-5xl rounded-[28px] border border-slate-700/80 bg-[#0b0f16] p-3 text-left shadow-[0_40px_120px_rgba(0,0,0,.55)]">
          <div className="rounded-2xl border border-slate-800 bg-[#090c12] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-violet-400">PRODUCT SNAPSHOT</p>
                <h2 className="mt-2 text-xl font-bold">Your career, organized around today.</h2>
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-violet-500">
                <Image src="/avatar/mentor.png" alt="Career mentor" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-white/[.02] p-4">
                <p className="text-xs text-slate-500">TODAY&apos;S FOCUS</p>
                <p className="mt-3 text-sm font-bold">Prepare for TCS interview</p>
                <div className="mt-4 h-1.5 rounded-full bg-slate-800">
                  <div className="h-full w-[70%] rounded-full bg-violet-500" />
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-white/[.02] p-4">
                <p className="text-xs text-slate-500">BEST MATCH</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-lg bg-white">
                    <Image src="/company/microsoft.svg" alt="Microsoft" fill className="object-contain p-2" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Cloud Intern</p>
                    <p className="text-xs text-emerald-400">92% match</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-white/[.02] p-4">
                <p className="text-xs text-slate-500">PIPELINE</p>
                <div className="mt-4 flex items-center gap-2">
                  {["bg-sky-500", "bg-violet-500", "bg-amber-500", "bg-emerald-500"].map((color, index) => (
                    <div key={color} className="flex-1">
                      <div className={`h-2 rounded-full ${color}`} />
                      <p className="mt-2 text-center text-[10px] text-slate-500">{[5, 3, 2, 1][index]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="border-y border-slate-800 bg-[#090c12] py-24">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-400">One system, distinct tools</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Every page has one clear job.</h2>
            <p className="mt-4 text-slate-400">
              The public site explains the product. The full workspace opens after login or account creation, so the auth flow has a real purpose.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map(([title, body], index) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#121720] to-[#0a0d13] p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-sm font-black text-violet-300">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-[1180px] px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-400">From uncertainty to momentum</p>
            <h2 className="mt-4 text-4xl font-extrabold">A calmer way to build your career.</h2>
            <p className="mt-4 leading-7 text-slate-400">
              CareerOS turns scattered effort into a visible process. You always know what happened, what matters, and what to do next.
            </p>
            <Link href="/signup" className="mt-7 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">Start your workspace →</Link>
          </div>
          <div className="space-y-3">
            {[
              ["01", "Set your direction", "Choose roles, skills, work modes, and companies that fit your goals."],
              ["02", "Run your weekly system", "Discover, apply, learn, and prepare from focused workspaces."],
              ["03", "Review real signals", "Use outcomes, not vanity metrics, to improve your strategy."],
            ].map(([number, title, body]) => (
              <div key={number} className="flex gap-4 rounded-2xl border border-slate-800 p-5">
                <span className="text-sm font-black text-violet-400">{number}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-4 px-5 py-8 text-xs text-slate-500 sm:flex-row">
          <p>✦ CareerOS · Built for the next opportunity.</p>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
