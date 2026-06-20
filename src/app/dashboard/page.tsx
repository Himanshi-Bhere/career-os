import HeroSection from "@/components/dashboard/HeroSection";
import StatCard from "@/components/dashboard/StatCard";
import OpportunityExplorer from "@/components/dashboard/OpportunityExplorer";
import CommunityPulse from "@/components/dashboard/CommunityPulse";
import SkillGap from "@/components/dashboard/SkillGap";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import CareerHealth from "@/components/dashboard/CareerHealth";
import JourneyTracker from "@/components/dashboard/JourneyTracker";
import LearnNext from "@/components/dashboard/LearnNext";

const stats = [
  { title: "Applications", value: "12", subtitle: "Total Applied", icon: "📨", change: "↑ 20%", tone: "green" },
  { title: "Interviews", value: "4", subtitle: "Scheduled", icon: "🎙️", change: "↑ 33%", tone: "green" },
  { title: "Offers", value: "1", subtitle: "Received", icon: "🎉", change: "↑ 100%", tone: "green" },
  { title: "Deadlines", value: "3", subtitle: "Upcoming", icon: "📅", change: "− 0%", tone: "amber" },
] as const;

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1320px] space-y-4">
      <HeroSection />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
      </div>
      <div className="grid gap-3 xl:grid-cols-[1fr_1fr_1fr]">
        <OpportunityExplorer />
        <CommunityPulse />
        <SkillGap />
      </div>
      <div className="grid gap-3 xl:grid-cols-[0.95fr_1.05fr]">
        <UpcomingCard />
        <CareerHealth />
      </div>
      <div className="grid gap-3 xl:grid-cols-[1.7fr_1fr]">
        <JourneyTracker />
        <LearnNext />
      </div>
    </div>
  );
}
