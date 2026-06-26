"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const ready = email.includes("@") && password.length >= 6;
  async function handleLogin(
  event: React.FormEvent
) {

  event.preventDefault();

  if (!ready) return;

  try {

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({

        email,

        password,

      });

    if (error) {

      alert(error.message);

      return;

    }

    router.push("/home");

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  } finally {

    setLoading(false);

  }

}

  return (
    <main className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">
      <section className="relative hidden overflow-hidden border-r border-slate-800 bg-[#080b10] p-10 lg:block">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
          <span className="text-3xl text-violet-400">✦</span>CareerOS
        </Link>
        <div className="absolute left-24 top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="relative mt-24 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-400">Your career command center</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em]">Sign in and pick up exactly where you left off.</h1>
          <p className="mt-5 leading-7 text-slate-400">
            Login is for returning users. Get Started now has its own account setup flow.
          </p>
        </div>
        <div className="relative mt-12 max-w-xl rounded-3xl border border-slate-700 bg-[#0c1118] p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-violet-500">
              <Image src="/avatar/mentor.png" alt="Mentor" fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <p className="font-bold">Welcome back, Himanshi</p>
              <p className="text-sm text-slate-400">3 focus tasks ready for today</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-xl bg-white/3 p-3"><strong className="block text-lg">12</strong>Apps</div>
            <div className="rounded-xl bg-white/3 p-3"><strong className="block text-lg">4</strong>Interviews</div>
            <div className="rounded-xl bg-white/3 p-3"><strong className="block text-lg">73</strong>Momentum</div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 flex items-center gap-2 text-xl font-extrabold lg:hidden">
            <span className="text-3xl text-violet-400">✦</span>CareerOS
          </Link>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-400">Secure sign in</p>
            <h2 className="mt-3 text-3xl font-extrabold">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-400">Frontend-only for now. Backend auth can plug in after the UI is finalized.</p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <label className="block text-xs font-semibold text-slate-400">
              Email address
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3.5 text-sm outline-none focus:border-violet-500" />
            </label>
            <label className="block text-xs font-semibold text-slate-400">
              Password
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" placeholder="Enter your password" className="mt-2 w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3.5 text-sm outline-none focus:border-violet-500" />
            </label>
            <div className="flex items-center justify-between text-xs">
              <button type="button" onClick={() => setRemember((value) => !value)} className="flex items-center gap-2 text-slate-400">
                <span className={`grid h-4 w-4 place-items-center rounded border ${remember ? "border-violet-500 bg-violet-500" : "border-slate-600"}`}>{remember ? "✓" : ""}</span>
                Remember me
              </button>
              <a href="#" className="text-violet-400">Forgot password?</a>
            </div>
            <button

 type="submit"

 disabled={!ready || loading}

 className={`block w-full rounded-xl px-5 py-3.5 text-center text-sm font-bold

 ${

 ready

 ? "bg-violet-600 text-white hover:bg-violet-500"

 : "bg-slate-800 text-slate-500"

 }`}

>

 {loading

 ? "Signing in..."

 : "Sign in"}

</button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-slate-600">
            <span className="h-px flex-1 bg-slate-800" />or<span className="h-px flex-1 bg-slate-800" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold hover:border-violet-500">Continue with Google</button>
            <button className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold hover:border-violet-500">Continue with GitHub</button>
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            New here? <Link href="/signup" className="font-semibold text-violet-400">Create your account</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
