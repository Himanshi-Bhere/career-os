"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const publicRoutes = ["/", "/login", "/signup"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublic = publicRoutes.includes(pathname);

  if (isPublic) return <div className="min-h-screen bg-[#070a0f] text-[#f5f5f7]">{children}</div>;

  return (
    <div className="min-h-screen bg-[#070a0f] text-[#f5f5f7]">
      <Sidebar />
      <header className="border-panel sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-[#080b10]/95 px-4 backdrop-blur lg:hidden">
        <Link href="/dashboard" className="font-extrabold"><span className="text-violet-400">✦</span> CareerOS</Link>
        <details className="relative"><summary className="list-none rounded-lg border border-slate-700 px-3 py-1.5 text-xs">Menu</summary><nav className="absolute right-0 mt-2 grid w-48 rounded-xl border border-slate-700 bg-[#0d1117] p-2 shadow-2xl">{[["Dashboard", "/dashboard"], ["Opportunities", "/opportunities"], ["Applications", "/applications"], ["Interviews", "/interviews"], ["Learning", "/learning"], ["Community", "/community"], ["Resume", "/resume"], ["Analytics", "/analytics"], ["Settings", "/settings"]].map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-3 py-2 text-xs hover:bg-violet-500/10">{label}</Link>)}</nav></details>
      </header>
      <main className="min-h-screen px-3 py-4 md:px-5 lg:ml-[200px] lg:px-5">{children}</main>
    </div>
  );
}
