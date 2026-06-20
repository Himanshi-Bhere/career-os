"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const goals = ["Internship", "Placement", "Skill growth"];
const roles = ["Cloud", "Frontend", "AI/ML", "Networking"];

export default function SignupPage() {
  const [goal, setGoal] = useState(goals[0]);
  const [role, setRole] = useState(roles[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ready = name.trim().length >= 2 && email.includes("@") && password.length >= 6;

  return (
    <main className="grid min-h-screen lg:grid-cols-[.95fr_1.05fr]">
      <section className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 flex items-center gap-2 text-xl font-extrabold">
            <span className="text-3xl text-violet-400">✦</span>CareerOS
          </Link>

          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-400">Create account</p>
            <h1 className="mt-3 text-3xl font-extrabold">Set up your CareerOS</h1>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Get Started should create the account and collect preferences first. After this, the user signs in before entering the workspace.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <label className="block text-xs font-semibold text-slate-400">
              Full name
              <input value={name} onChange={(event) => setName(event.target.value)} type="text" autoComplete="name" placeholder="Himanshi" className="mt-2 w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3.5 text-sm outline-none focus:border-violet-500" />
            </label>
            <label className="block text-xs font-semibold text-slate-400">
              Email address
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3.5 text-sm outline-none focus:border-violet-500" />
            </label>
            <label className="block text-xs font-semibold text-slate-400">
              Password
              <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" autoComplete="new-password" placeholder="At least 6 characters" className="mt-2 w-full rounded-xl border border-slate-700 bg-[#090c12] px-4 py-3.5 text-sm outline-none focus:border-violet-500" />
            </label>

            <div>
              <p className="text-xs font-semibold text-slate-400">Main goal</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {goals.map((item) => (
                  <button key={item} type="button" onClick={() => setGoal(item)} className={`rounded-xl border px-3 py-2.5 text-xs font-bold ${goal === item ? "border-violet-500 bg-violet-500/15 text-white" : "border-slate-700 text-slate-400 hover:border-violet-500"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400">Preferred role</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {roles.map((item) => (
                  <button key={item} type="button" onClick={() => setRole(item)} className={`rounded-xl border px-3 py-2.5 text-xs font-bold ${role === item ? "border-violet-500 bg-violet-500/15 text-white" : "border-slate-700 text-slate-400 hover:border-violet-500"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <Link href={ready ? "/login" : "#"} className={`block rounded-xl px-5 py-3.5 text-center text-sm font-bold shadow-[0_12px_35px_rgba(124,58,237,.25)] ${ready ? "bg-violet-600 text-white hover:bg-violet-500" : "bg-slate-800 text-slate-500"}`}>
              Create account & continue to login
            </Link>
            <p className="text-center text-xs text-slate-500">
              Backend later: this button will create the account, save preferences, then redirect to login or email verification.
            </p>
          </form>

          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account? <Link href="/login" className="font-semibold text-violet-400">Log in</Link>
          </p>
        </div>
      </section>

      <section className="relative hidden overflow-hidden border-l border-slate-800 bg-[#080b10] p-10 lg:block">
        <div className="absolute right-16 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="relative mx-auto mt-16 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-400">Personalized from day one</p>
          <h2 className="mt-5 text-5xl font-black leading-tight tracking-[-0.04em]">Signup prepares the workspace. Login opens it.</h2>
          <p className="mt-5 leading-7 text-slate-400">
            That separation makes the product feel secure and understandable: create account first, authenticate next, then enter CareerOS.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-700 bg-[#0c1118] p-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-violet-500">
                <Image src="/avatar/mentor.png" alt="Career mentor" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold">{name.trim() || "Your"} first setup</p>
                <p className="text-sm text-slate-400">{goal} goal · {role} track</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              {["Save onboarding preferences", "Create secure account", "Ask user to log in"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-800 bg-white/[.03] px-4 py-3">
                  <span>{item}</span>
                  <span className="text-xs font-bold text-violet-300">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
