"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["⌂", "Dashboard", "/dashboard"], ["◎", "Opportunities", "/opportunities"], ["▣", "Applications", "/applications"],
  ["♩", "Interviews", "/interviews"], ["▤", "Learning", "/learning"], ["♧", "Community", "/community"],
  ["▱", "Resume", "/resume"], ["▥", "Analytics", "/analytics"], ["⚙", "Settings", "/settings"],
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  return <aside className="border-panel fixed inset-y-0 left-0 z-20 hidden w-[200px] flex-col border-r bg-[#080b10] px-3 py-5 lg:flex"><Link href="/dashboard" className="mb-7 flex items-center gap-2 px-2 text-[18px] font-extrabold"><span className="text-3xl text-violet-400">✦</span>CareerOS</Link><nav className="space-y-1 text-[14px]">{nav.map(([icon, label, href]) => { const active = pathname === href; return <Link key={label} href={href} className={`flex h-[46px] items-center gap-3 rounded-lg px-3 transition-colors ${active ? "bg-violet-500/20 font-semibold text-violet-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}><span className="w-5 text-center text-xl text-slate-300">{icon}</span>{label}</Link>; })}</nav><div className="border-panel mt-auto rounded-xl border bg-[#0b0e14] p-3"><div className="flex items-center gap-2"><div className="relative h-9 w-9 overflow-hidden rounded-full bg-violet-500/20"><Image src="/avatar/mentor.png" alt="Himanshi" fill className="object-cover" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Himanshi</p><p className="text-[11px] text-slate-400">View Profile</p></div><span>›</span></div><div className="border-panel mt-3 flex items-center justify-between border-t pt-3 text-xs text-slate-300"><span>Dark Mode</span><span className="flex h-5 w-8 items-center justify-end rounded-full bg-violet-500 p-0.5"><i className="h-4 w-4 rounded-full bg-white" /></span></div></div></aside>;
}
