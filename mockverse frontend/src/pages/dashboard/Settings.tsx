import { useState } from "react";

import {
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  Globe2,
  Lock,
  Moon,
  Palette,
  Save,
  Shield,
  Sun,
  Trash2,
  User,
} from "lucide-react";

/* ========================================================= */
/* Settings Page                                               */
/* ========================================================= */

const Settings = () => {
  /* ======================================================= */
  /* State                                                     */
  /* ======================================================= */

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [studyReminders, setStudyReminders] =
    useState(true);

  const [testResults, setTestResults] =
    useState(true);

  const [weeklyProgress, setWeeklyProgress] =
    useState(false);

  const [autoSave, setAutoSave] =
    useState(true);

  const [showProfile, setShowProfile] =
    useState(true);

  const [saved, setSaved] =
    useState(false);

  /* ======================================================= */
  /* Save Settings                                             */
  /* ======================================================= */

  const handleSave = () => {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* ======================================================= */
  /* Render                                                    */
  /* ======================================================= */

  return (
    <div className="space-y-7">

      {/* ================================================= */}
      {/* Header                                             */}
      {/* ================================================= */}

      <section>
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-teal-100
              bg-teal-50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-teal-700
              dark:border-teal-500/20
              dark:bg-teal-500/10
              dark:text-teal-400
            "
          >
            <Palette className="h-3.5 w-3.5" />

            Preferences
          </div>

          <h1
            className="
              mt-3
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-3xl
              dark:text-white
            "
          >
            Settings
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            Manage your account, learning preferences,
            notifications and privacy settings.
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* Account                                             */}
      {/* ================================================= */}

      <SettingsSection
        icon={User}
        title="Account"
        description="Manage your account information and security."
      >
        <SettingsRow
          icon={User}
          title="Profile"
          description="Update your personal information and profile details."
          action={
            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-600
                transition
                hover:border-teal-200
                hover:bg-teal-50
                hover:text-teal-700
                dark:border-white/10
                dark:text-slate-300
                dark:hover:bg-teal-500/10
                dark:hover:text-teal-400
              "
            >
              Manage
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          }
        />

        <SettingsRow
          icon={Lock}
          title="Password & Security"
          description="Change your password and manage account security."
          action={
            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-xl
                border
                border-slate-200
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-600
                transition
                hover:border-teal-200
                hover:bg-teal-50
                hover:text-teal-700
                dark:border-white/10
                dark:text-slate-300
                dark:hover:bg-teal-500/10
                dark:hover:text-teal-400
              "
            >
              Manage
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          }
        />
      </SettingsSection>

      {/* ================================================= */}
      {/* Learning Preferences                              */}
      {/* ================================================= */}

      <SettingsSection
        icon={BookOpen}
        title="Learning Preferences"
        description="Customize how you study and practice IELTS."
      >
        <SettingsRow
          icon={Globe2}
          title="Language"
          description="Choose the language used throughout the platform."
          action={
            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value)
              }
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-700
                outline-none
                focus:border-teal-400
                focus:ring-4
                focus:ring-teal-500/10
                dark:border-white/10
                dark:bg-slate-950
                dark:text-slate-200
              "
            >
              <option>English</option>
              <option>German</option>
              <option>Bangla</option>
            </select>
          }
        />

        <SettingsRow
          icon={BookOpen}
          title="Automatic Saving"
          description="Automatically save your practice progress."
          action={
            <Toggle
              enabled={autoSave}
              onChange={setAutoSave}
            />
          }
        />
      </SettingsSection>

      {/* ================================================= */}
      {/* Appearance                                         */}
      {/* ================================================= */}

      <SettingsSection
        icon={Palette}
        title="Appearance"
        description="Customize the look and feel of your dashboard."
      >
        <SettingsRow
          icon={theme === "Light" ? Sun : Moon}
          title="Theme"
          description="Choose your preferred appearance."
          action={
            <div
              className="
                flex
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-1
                dark:border-white/10
                dark:bg-slate-950
              "
            >
              <ThemeButton
                icon={Sun}
                label="Light"
                active={theme === "Light"}
                onClick={() => setTheme("Light")}
              />

              <ThemeButton
                icon={Moon}
                label="Dark"
                active={theme === "Dark"}
                onClick={() => setTheme("Dark")}
              />
            </div>
          }
        />
      </SettingsSection>

      {/* ================================================= */}
      {/* Notifications                                     */}
      {/* ================================================= */}

      <SettingsSection
        icon={Bell}
        title="Notifications"
        description="Choose which notifications you want to receive."
      >
        <SettingsRow
          icon={Bell}
          title="Email Notifications"
          description="Receive important updates and account notifications."
          action={
            <Toggle
              enabled={emailNotifications}
              onChange={setEmailNotifications}
            />
          }
        />

        <SettingsRow
          icon={BookOpen}
          title="Study Reminders"
          description="Get reminders to maintain your study routine."
          action={
            <Toggle
              enabled={studyReminders}
              onChange={setStudyReminders}
            />
          }
        />

        <SettingsRow
          icon={Check}
          title="Test Results"
          description="Receive notifications when your test results are ready."
          action={
            <Toggle
              enabled={testResults}
              onChange={setTestResults}
            />
          }
        />

        <SettingsRow
          icon={BookOpen}
          title="Weekly Progress"
          description="Receive a weekly summary of your IELTS progress."
          action={
            <Toggle
              enabled={weeklyProgress}
              onChange={setWeeklyProgress}
            />
          }
        />
      </SettingsSection>

      {/* ================================================= */}
      {/* Privacy                                            */}
      {/* ================================================= */}

      <SettingsSection
        icon={Shield}
        title="Privacy"
        description="Control how your profile and learning activity are displayed."
      >
        <SettingsRow
          icon={User}
          title="Public Profile"
          description="Allow other users to view your profile."
          action={
            <Toggle
              enabled={showProfile}
              onChange={setShowProfile}
            />
          }
        />

        <SettingsRow
          icon={Shield}
          title="Learning Statistics"
          description="Your detailed learning statistics remain private."
          action={
            <span
              className="
                rounded-lg
                bg-emerald-50
                px-2.5
                py-1.5
                text-[10px]
                font-semibold
                text-emerald-600
                dark:bg-emerald-500/10
                dark:text-emerald-400
              "
            >
              Private
            </span>
          }
        />
      </SettingsSection>

      {/* ================================================= */}
      {/* Save                                                */}
      {/* ================================================= */}

      <section
        className="
          flex
          flex-col
          gap-4
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-6
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            Save your changes
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your preferences will be applied to your account.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-teal-600
            px-5
            py-2.5
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-teal-700
          "
        >
          {saved ? (
            <>
              <Check className="h-4 w-4" />
              Saved
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          )}
        </button>
      </section>

      {/* ================================================= */}
      {/* Danger Zone                                        */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-red-100
          bg-white
          p-5
          shadow-sm
          sm:p-6
          dark:border-red-500/20
          dark:bg-slate-900/70
        "
      >
        <div className="flex items-start gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-red-50
              text-red-500
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <Trash2 className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Danger Zone
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Permanently delete your account and all
              associated learning data.
            </p>

            <button
              type="button"
              onClick={() => {
                console.log("Delete account requested");
              }}
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-red-200
                px-4
                py-2.5
                text-xs
                font-semibold
                text-red-600
                transition
                hover:bg-red-50
                dark:border-red-500/20
                dark:text-red-400
                dark:hover:bg-red-500/10
              "
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete Account
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Settings;

/* ========================================================= */
/* Settings Section                                            */
/* ========================================================= */

interface SettingsSectionProps {
  icon: typeof User;
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingsSection = ({
  icon: Icon,
  title,
  description,
  children,
}: SettingsSectionProps) => {
  return (
    <section
      className="
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
      {/* Header */}

      <div
        className="
          flex
          items-start
          gap-3
          border-b
          border-slate-100
          p-5
          sm:p-6
          dark:border-white/5
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-teal-50
            text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {/* Settings */}

      <div className="divide-y divide-slate-100 dark:divide-white/5">
        {children}
      </div>
    </section>
  );
};

/* ========================================================= */
/* Settings Row                                                */
/* ========================================================= */

interface SettingsRowProps {
  icon: typeof User;
  title: string;
  description: string;
  action: React.ReactNode;
}

const SettingsRow = ({
  icon: Icon,
  title,
  description,
  action,
}: SettingsRowProps) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        p-5
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:p-6
      "
    >
      <div className="flex min-w-0 items-start gap-3">
        <div
          className="
            mt-0.5
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-slate-50
            text-slate-500
            dark:bg-slate-800
            dark:text-slate-400
          "
        >
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {title}
          </h3>

          <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <div className="shrink-0">
        {action}
      </div>
    </div>
  );
};

/* ========================================================= */
/* Toggle                                                      */
/* ========================================================= */

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({
  enabled,
  onChange,
}: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`
        relative
        h-6
        w-11
        rounded-full
        transition
        ${
          enabled
            ? "bg-teal-600"
            : "bg-slate-200 dark:bg-slate-700"
        }
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-4
          w-4
          rounded-full
          bg-white
          shadow-sm
          transition
          ${
            enabled
              ? "left-6"
              : "left-1"
          }
        `}
      />
    </button>
  );
};

/* ========================================================= */
/* Theme Button                                                */
/* ========================================================= */

interface ThemeButtonProps {
  icon: typeof Sun;
  label: string;
  active: boolean;
  onClick: () => void;
}

const ThemeButton = ({
  icon: Icon,
  label,
  active,
  onClick,
}: ThemeButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-lg
        px-3
        py-1.5
        text-xs
        font-semibold
        transition
        ${
          active
            ? "bg-white text-slate-800 shadow-sm dark:bg-slate-800 dark:text-white"
            : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        }
      `}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
};
