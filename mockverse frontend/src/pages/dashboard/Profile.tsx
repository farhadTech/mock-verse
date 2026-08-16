import { useState } from "react";

import {
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Edit3,
  Flame,
  Mail,
  MapPin,
  Save,
  Target,
  Trophy,
  User,
  X,
} from "lucide-react";

/* ========================================================= */
/* Types                                                       */
/* ========================================================= */

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  targetBand: string;
  examDate: string;
  bio: string;
}

/* ========================================================= */
/* Mock Profile Data                                           */
/* ========================================================= */

const initialProfile: ProfileData = {
  firstName: "Farhadur",
  lastName: "Rahman",
  email: "farhad@example.com",
  location: "Dhaka, Bangladesh",
  targetBand: "8.0",
  examDate: "December 2026",
  bio: "Preparing for IELTS with a focus on improving my overall English proficiency and achieving my target band score.",
};

/* ========================================================= */
/* Profile                                                     */
/* ========================================================= */

const Profile = () => {
  const [profile, setProfile] =
    useState<ProfileData>(initialProfile);

  const [draftProfile, setDraftProfile] =
    useState<ProfileData>(initialProfile);

  const [isEditing, setIsEditing] =
    useState(false);

  const handleChange = (
    field: keyof ProfileData,
    value: string
  ) => {
    setDraftProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setDraftProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraftProfile(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(draftProfile);
    setIsEditing(false);
  };

  const fullName =
    `${profile.firstName} ${profile.lastName}`.trim();

  return (
    <div className="space-y-6">

      {/* =================================================== */}
      {/* Profile Header                                       */}
      {/* =================================================== */}

      <section
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-teal-500/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            left-1/3
            h-56
            w-56
            rounded-full
            bg-emerald-500/5
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-6
            p-6
            sm:p-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* Identity */}

          <div className="flex items-center gap-4">

            {/* Avatar */}

            <div
              className="
                flex
                h-20
                w-20
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-teal-500
                to-emerald-600
                text-2xl
                font-bold
                text-white
                shadow-lg
                shadow-teal-500/20
              "
            >
              {profile.firstName.charAt(0)}
              {profile.lastName.charAt(0)}
            </div>

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-teal-50
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-teal-700
                  dark:bg-teal-500/10
                  dark:text-teal-400
                "
              >
                <CheckCircle2 className="h-3 w-3" />

                Student
              </div>

              <h1
                className="
                  mt-2
                  text-xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-2xl
                  dark:text-white
                "
              >
                {fullName}
              </h1>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {profile.email}
              </p>

            </div>

          </div>

          {/* Edit button */}

          {!isEditing && (
            <button
              type="button"
              onClick={handleEdit}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-teal-600
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-teal-700
                focus:outline-none
                focus:ring-4
                focus:ring-teal-500/20
              "
            >
              <Edit3 className="h-4 w-4" />

              Edit Profile
            </button>
          )}

        </div>

      </section>

      {/* =================================================== */}
      {/* Main Grid                                             */}
      {/* =================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.75fr)]
        "
      >

        {/* ================================================= */}
        {/* Left Column                                        */}
        {/* ================================================= */}

        <div className="space-y-6">

          {/* Personal Information */}

          <ProfileInformation
            profile={isEditing ? draftProfile : profile}
            isEditing={isEditing}
            onChange={handleChange}
          />

          {/* IELTS Goal */}

          <section
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-teal-50
                  text-teal-600
                  dark:bg-teal-500/10
                  dark:text-teal-400
                "
              >
                <Target className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  IELTS Goal
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Your current exam target
                </p>
              </div>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <GoalCard
                icon={Target}
                label="Target Band"
                value={`${profile.targetBand}`}
                description="Overall IELTS goal"
              />

              <GoalCard
                icon={CalendarDays}
                label="Planned Exam"
                value={profile.examDate}
                description="Target exam period"
              />

            </div>

          </section>

          {/* About */}

          <section
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-100
                  text-slate-600
                  dark:bg-slate-800
                  dark:text-slate-300
                "
              >
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  About
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  A little about your learning journey
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              {profile.bio}
            </p>

          </section>

        </div>

        {/* ================================================= */}
        {/* Right Column                                       */}
        {/* ================================================= */}

        <div className="space-y-6">

          {/* Overall Progress */}

          <section
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <BarChart3 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    Overall Progress
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Current performance
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-6 text-center">

              <div className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                7.0
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Current overall band
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                <div
                  className="
                    h-full
                    w-[70%]
                    rounded-full
                    bg-gradient-to-r
                    from-teal-500
                    to-emerald-500
                  "
                />

              </div>

              <div className="mt-2 flex justify-between text-[10px] text-slate-400">

                <span>0</span>

                <span>Target: {profile.targetBand}</span>

                <span>9</span>

              </div>

            </div>

          </section>

          {/* Module Performance */}

          <section
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                  dark:bg-blue-500/10
                  dark:text-blue-400
                "
              >
                <Award className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Module Performance
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Latest skill scores
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-5">

              <SkillBar
                name="Listening"
                score={7.5}
                percentage={83}
              />

              <SkillBar
                name="Reading"
                score={7.5}
                percentage={83}
              />

              <SkillBar
                name="Writing"
                score={6.5}
                percentage={72}
              />

              <SkillBar
                name="Speaking"
                score={7.0}
                percentage={78}
              />

            </div>

          </section>

          {/* Achievements */}

          <section
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:p-6
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-amber-50
                  text-amber-600
                  dark:bg-amber-500/10
                  dark:text-amber-400
                "
              >
                <Trophy className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  Achievements
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Your learning milestones
                </p>
              </div>

            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">

              <Achievement
                icon={Flame}
                label="5 Day"
                description="Streak"
              />

              <Achievement
                icon={Trophy}
                label="Band 7"
                description="Achieved"
              />

              <Achievement
                icon={CheckCircle2}
                label="10+"
                description="Tests"
              />

            </div>

          </section>

        </div>

      </div>

      {/* =================================================== */}
      {/* Save / Cancel Editing                                */}
      {/* =================================================== */}

      {isEditing && (
        <div
          className="
            sticky
            bottom-4
            z-20
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white/95
            p-4
            shadow-xl
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            dark:border-white/10
            dark:bg-slate-900/95
          "
        >

          <div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              You are editing your profile
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              Save your changes when you're finished.
            </p>

          </div>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={handleCancel}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                px-4
                py-2.5
                text-xs
                font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
                dark:border-white/10
                dark:text-slate-300
                dark:hover:bg-slate-800
              "
            >
              <X className="h-4 w-4" />

              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-teal-600
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-teal-700
              "
            >
              <Save className="h-4 w-4" />

              Save Changes
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Profile;

/* ========================================================= */
/* Profile Information                                        */
/* ========================================================= */

interface ProfileInformationProps {
  profile: ProfileData;
  isEditing: boolean;
  onChange: (
    field: keyof ProfileData,
    value: string
  ) => void;
}

const ProfileInformation = ({
  profile,
  isEditing,
  onChange,
}: ProfileInformationProps) => {
  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        sm:p-6
        dark:border-white/10
        dark:bg-slate-900/70
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-teal-50
            text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
          "
        >
          <User className="h-5 w-5" />
        </div>

        <div>

          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Personal Information
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Your account information
          </p>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

        <ProfileField
          label="First Name"
          value={profile.firstName}
          editing={isEditing}
          onChange={(value) =>
            onChange("firstName", value)
          }
        />

        <ProfileField
          label="Last Name"
          value={profile.lastName}
          editing={isEditing}
          onChange={(value) =>
            onChange("lastName", value)
          }
        />

        <ProfileField
          label="Email"
          value={profile.email}
          editing={isEditing}
          type="email"
          icon={Mail}
          onChange={(value) =>
            onChange("email", value)
          }
        />

        <ProfileField
          label="Location"
          value={profile.location}
          editing={isEditing}
          icon={MapPin}
          onChange={(value) =>
            onChange("location", value)
          }
        />

      </div>

    </section>
  );
};

/* ========================================================= */
/* Profile Field                                               */
/* ========================================================= */

interface ProfileFieldProps {
  label: string;
  value: string;
  editing: boolean;
  type?: string;
  icon?: typeof Mail;
  onChange: (value: string) => void;
}

const ProfileField = ({
  label,
  value,
  editing,
  type = "text",
  icon: Icon,
  onChange,
}: ProfileFieldProps) => {
  return (
    <div>

      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
        {label}
      </label>

      <div className="relative mt-2">

        {Icon && (
          <Icon
            className="
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />
        )}

        {editing ? (
          <input
            type={type}
            value={value}
            onChange={(event) =>
              onChange(event.target.value)
            }
            className={`
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              ${Icon ? "pl-10" : "px-3"}
              pr-3
              text-sm
              text-slate-900
              outline-none
              transition
              focus:border-teal-400
              focus:ring-4
              focus:ring-teal-500/10
              dark:border-white/10
              dark:bg-slate-950/50
              dark:text-white
            `}
          />
        ) : (
          <div
            className={`
              flex
              min-h-11
              items-center
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              ${Icon ? "pl-10" : "px-3"}
              pr-3
              text-sm
              text-slate-700
              dark:border-white/5
              dark:bg-slate-950/40
              dark:text-slate-300
            `}
          >
            {value}
          </div>
        )}

      </div>

    </div>
  );
};

/* ========================================================= */
/* Goal Card                                                   */
/* ========================================================= */

interface GoalCardProps {
  icon: typeof Target;
  label: string;
  value: string;
  description: string;
}

const GoalCard = ({
  icon: Icon,
  label,
  value,
  description,
}: GoalCardProps) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-100
        bg-slate-50
        p-4
        dark:border-white/5
        dark:bg-slate-950/40
      "
    >

      <div className="flex items-center gap-2">

        <Icon className="h-4 w-4 text-teal-500" />

        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        {description}
      </p>

    </div>
  );
};

/* ========================================================= */
/* Skill Bar                                                   */
/* ========================================================= */

interface SkillBarProps {
  name: string;
  score: number;
  percentage: number;
}

const SkillBar = ({
  name,
  score,
  percentage,
}: SkillBarProps) => {
  return (
    <div>

      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {name}
        </span>

        <span className="text-xs font-bold text-slate-900 dark:text-white">
          {score.toFixed(1)}
        </span>

      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-teal-500
            to-emerald-500
            transition-all
            duration-700
          "
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
};

/* ========================================================= */
/* Achievement                                                */
/* ========================================================= */

interface AchievementProps {
  icon: typeof Flame;
  label: string;
  description: string;
}

const Achievement = ({
  icon: Icon,
  label,
  description,
}: AchievementProps) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        rounded-xl
        bg-slate-50
        px-2
        py-4
        text-center
        dark:bg-slate-950/40
      "
    >

      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-amber-50
          text-amber-500
          dark:bg-amber-500/10
          dark:text-amber-400
        "
      >
        <Icon className="h-4 w-4" />
      </div>

      <p className="mt-2 text-xs font-bold text-slate-800 dark:text-slate-200">
        {label}
      </p>

      <p className="mt-0.5 text-[9px] text-slate-400">
        {description}
      </p>

    </div>
  );
};
