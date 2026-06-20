export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`border-panel rounded-xl border bg-[linear-gradient(135deg,#11151d_0%,#0a0d12_100%)] ${className}`}>
      {children}
    </section>
  );
}
