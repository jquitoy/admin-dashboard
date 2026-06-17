'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import {
  User,
  Bell,
  Palette,
  Lock,
  Globe,
  Save,
  Moon,
  Sun,
  Monitor,
  Mail,
  MessageCircle,
  Heart,
  Share2,
  Users,
} from 'lucide-react';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings, appearance preferences, and
          notifications
        </p>
      </div>

      {/* Account Information */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Account Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Full Name', value: 'Joshua A. Quitoy', type: 'text' },
            {
              label: 'Email Address',
              value: 'jquitoy@filamer.edu.ph',
              type: 'email',
            },
            { label: 'Role', value: 'Editor-in-Chief', type: 'text' },
            {
              label: 'Department',
              value: 'College of Computer Studies',
              type: 'text',
            },
            { label: 'Phone Number', value: '+63 912 345 6789', type: 'tel' },
            {
              label: 'Location',
              value: 'Filamer Christian University, Inc.  ',
              type: 'text',
            },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                defaultValue={field.value}
                className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <Palette className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Appearance
          </h2>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Theme Mode
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              {
                mode: 'light',
                label: 'Light',
                icon: Sun,
                desc: 'Light mode for daytime',
              },
              {
                mode: 'dark',
                label: 'Dark',
                icon: Moon,
                desc: 'Dark mode for nighttime',
              },
              {
                mode: 'system',
                label: 'System',
                icon: Monitor,
                desc: 'Follow system preference',
              },
            ].map(({ mode, label, icon: Icon, desc }) => (
              <button
                key={mode}
                onClick={() => setTheme(mode)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all min-w-[140px] ${
                  theme === mode
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    theme === mode
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p
                    className={`text-sm font-medium ${
                      theme === mode
                        ? 'text-emerald-700 dark:text-emerald-300'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <Bell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notification Preferences
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: Mail,
              label: 'Email Notifications',
              desc: 'Receive updates via email',
              enabled: true,
            },
            {
              icon: MessageCircle,
              label: 'Comment Alerts',
              desc: 'Get notified when someone comments on your posts',
              enabled: true,
            },
            {
              icon: Heart,
              label: 'Engagement Updates',
              desc: 'Weekly digest of likes, shares, and follows',
              enabled: true,
            },
            {
              icon: Share2,
              label: 'Mention Alerts',
              desc: 'Notify when your publication is mentioned',
              enabled: false,
            },
            {
              icon: Users,
              label: 'Team Activity',
              desc: 'Updates from your editorial team members',
              enabled: true,
            },
            {
              icon: Lock,
              label: 'Security Alerts',
              desc: 'Login and account security notifications',
              enabled: true,
            },
          ].map((notification) => (
            <NotificationToggle key={notification.label} {...notification} />
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end gap-3">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg transition-colors"
        >
          <Save className="w-4 h-4" />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

function NotificationToggle({
  icon: Icon,
  label,
  desc,
  enabled: defaultEnabled,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  enabled: boolean;
}) {
  const [enabled, setEnabled] = useState(defaultEnabled);

  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{desc}</p>
        </div>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          enabled ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
