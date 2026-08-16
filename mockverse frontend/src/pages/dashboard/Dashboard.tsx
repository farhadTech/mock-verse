import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickActions from "../../components/dashboard/QuickActions";
import ProgressOverview from "../../components/dashboard/ProgressOverview";
import SkillOverview from "../../components/dashboard/SkillOverview";
import RecentTests from "../../components/dashboard/RecentTests";
import StudyStreak from "../../components/dashboard/StudyStreak";
import RecommendedPractice from "../../components/dashboard/RecommendedPractice";
import UpcomingTests from "../../components/dashboard/UpcomingTests";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* ===================================================== */}
      {/* Welcome                                               */}
      {/* ===================================================== */}

      <WelcomeCard />

      {/* ===================================================== */}
      {/* Statistics                                            */}
      {/* ===================================================== */}

      <section
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatsCard
          title="Current Band"
          value="7.0"
          change="+0.5"
          description="from your previous test"
          type="band"
        />

        <StatsCard
          title="Tests Completed"
          value="12"
          change="+3"
          description="this month"
          type="tests"
        />

        <StatsCard
          title="Study Time"
          value="18.5h"
          change="+4.2h"
          description="this month"
          type="time"
        />

        <StatsCard
          title="Study Streak"
          value="5 days"
          change="+2"
          description="personal best: 14 days"
          type="streak"
        />
      </section>

      {/* ===================================================== */}
      {/* Quick Actions                                         */}
      {/* ===================================================== */}

      <QuickActions />

      {/* ===================================================== */}
      {/* Progress + Skills                                     */}
      {/* ===================================================== */}

      <section
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]
        "
      >
        <ProgressOverview />

        <SkillOverview />
      </section>

      {/* ===================================================== */}
      {/* Recent Tests + Study Streak                            */}
      {/* ===================================================== */}

      <section
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]
        "
      >
        <RecentTests />

        <StudyStreak />
      </section>

      {/* ===================================================== */}
      {/* Recommended + Upcoming                                 */}
      {/* ===================================================== */}

      <section
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]
        "
      >
        <RecommendedPractice />

        <UpcomingTests />
      </section>

    </div>
  );
};

export default Dashboard;