"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const appNav = [
  { icon: "⌂", label: "Home", href: "/home" },
  { icon: "◎", label: "Opportunities", href: "/opportunities" },
  { icon: "▣", label: "Applications", href: "/applications" },
  { icon: "♪", label: "Interviews", href: "/interviews" },
  { icon: "▤", label: "Learning", href: "/learning" },
  { icon: "▱", label: "Resume", href: "/resume" },
  { icon: "♧", label: "Community", href: "/community" },
  { icon: "▥", label: "Analytics", href: "/analytics" },
  { icon: "?", label: "Help", href: "/help" },
  { icon: "⚙", label: "Settings", href: "/settings" },
] as const;

export const pageTitles: Record<string, string> = Object.fromEntries(appNav.map((item) => [item.href, item.label]));

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`border-panel fixed inset-y-0 left-0 z-30 hidden flex-col border-r bg-[#080b10] px-3 py-5 transition-all duration-300 lg:flex ${collapsed ? "w-[76px]" : "w-[216px]"}`}>
      <div className="mb-7 flex items-center justify-between">
        <Link href="/home" className={`flex items-center gap-2 px-2 text-[18px] font-extrabold ${collapsed ? "justify-center" : ""}`}>
          <span className="text-3xl text-violet-400">✦</span>
          {!collapsed && <span>CareerOS</span>}
        </Link>
        {!collapsed && (
          <button onClick={onToggle} className="rounded-lg border border-slate-700 px-2 py-1 text-xs text-slate-400 hover:border-violet-500 hover:text-white" aria-label="Collapse sidebar">
            ‹
          </button>
        )}
      </div>

      {collapsed && (
        <button onClick={onToggle} className="mb-4 rounded-lg border border-slate-700 py-2 text-xs text-slate-400 hover:border-violet-500 hover:text-white" aria-label="Expand sidebar">
          ›
        </button>
      )}

      <nav className="space-y-1 text-[14px]">
        {appNav.map((item) => {
          const active = pathname === item.href || (item.href !== "/home" && pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex h-[46px] items-center gap-3 rounded-lg px-3 transition-colors ${collapsed ? "justify-center" : ""} ${active ? "bg-violet-500/20 font-semibold text-violet-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
            >
              <span className="w-5 text-center text-lg text-slate-300">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="border-panel mt-auto rounded-xl border bg-[#0b0e14] p-3 text-xs text-slate-400">
          <p className="font-semibold text-slate-200">Need a nudge?</p>
          <p className="mt-1 leading-5">Open Help or ask the mentor for the next best action.</p>
          <Link href="/help" className="mt-3 inline-flex rounded-lg bg-violet-500/15 px-3 py-2 font-semibold text-violet-300 hover:bg-violet-500/25">
            Open guide
          </Link>
        </div>
      )}
    </aside>
  );
}
