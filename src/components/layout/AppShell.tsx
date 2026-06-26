"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Sidebar, { appNav, pageTitles } from "./Sidebar";

const publicRoutes = ["/", "/login", "/signup"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublic = publicRoutes.includes(pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("careeros-theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("careeros-theme", theme);
  }, [theme]);

  const title = useMemo(() => {
    if (pathname === "/dashboard") return "Home";
    const firstSegment = `/${pathname.split("/")[1]}`;
    return pageTitles[pathname] ?? pageTitles[firstSegment] ?? "CareerOS";
  }, [pathname]);

  if (isPublic) {
    return <div className="min-h-screen bg-[#070a0f] text-[#f5f5f7]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#070a0f] text-[#f5f5f7] transition-colors">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />

      <header className={`border-panel sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-[#080b10]/95 px-4 backdrop-blur transition-all duration-300 lg:fixed lg:right-0 ${collapsed ? "lg:left-19" : "lg:left-54"}`}>
        <div className="flex items-center gap-3">
          <details className="relative lg:hidden">
            <summary className="list-none rounded-lg border border-slate-700 px-3 py-2 text-xs">Menu</summary>
            <nav className="absolute left-0 mt-2 grid w-56 rounded-xl border border-slate-700 bg-[#0d1117] p-2 shadow-2xl">
              {appNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-xs hover:bg-violet-500/10">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
          <div>
            <p className="hidden text-[10px] font-bold uppercase tracking-[.22em] text-violet-400 sm:block">CareerOS</p>
            <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">{title}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden h-10 w-72 items-center rounded-xl border border-slate-700 bg-[#090c12] px-3 text-sm text-slate-500 xl:flex">
            Search companies, roles, notes...
          </div>
          <Link href="/help" className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-violet-500 hover:text-white">
            Help
          </Link>
          <button className="hidden rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-violet-500 hover:text-white sm:block">
            3 alerts
          </button>
          <button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")} className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-violet-500 hover:text-white">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <details className="relative">
            <summary className="list-none">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-violet-500 bg-violet-500/20">
                <Image
                 src="/avatar/mentor.png" alt="Himanshi profile" fill sizes="40px" className="object-cover" />
              </div>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-700 bg-[#0d1117] p-2 text-sm shadow-2xl">
              <div className="border-b border-slate-800 px-3 py-2">
                <p className="font-semibold">Himanshi</p>
                <p className="text-xs text-slate-400">Student profile</p>
              </div>
              {["View profile", "Career preferences", "Notifications", "Logout"].map((item) => (
                <button key={item} className="block w-full rounded-lg px-3 py-2 text-left text-xs text-slate-300 hover:bg-violet-500/10 hover:text-white">
                  {item}
                </button>
              ))}
            </div>
          </details>
        </div>
      </header>

      <main className={`min-h-screen px-3 pb-6 pt-4 transition-all duration-300 md:px-5 lg:pt-20 ${collapsed ? "lg:ml-19" : "lg:ml-54"}`}>
        {children}
      </main>
    </div>
  );
}
