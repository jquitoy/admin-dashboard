'use client';

import { useState } from 'react';
import { Bell, Moon, Sun, Search, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/profile': 'Profile',
  '/analytics': 'Analytics',
  '/reports': 'Reports',
  '/settings': 'Settings',
};

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  const title = pageTitles[pathname] || 'Dashboard';

  const notifications = [
    {
      id: 1,
      text: 'New article submission: "Campus Sustainability"',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      text: 'Your post reached 500 engagements!',
      time: '1h ago',
      unread: true,
    },
    {
      id: 3,
      text: 'Editor meeting tomorrow at 3 PM',
      time: '3h ago',
      unread: false,
    },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Page title */}
        <div className="flex items-center gap-3">
          <button className="sm:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              The Hillside Echo — The Official Student Publication of Filamer
              Christian University, Inc.
            </p>
          </div>
        </div>

        {/* Right: Search, Theme toggle, Notifications, User */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-400 dark:text-gray-500">
            <Search className="w-4 h-4" />
            <span className="text-xs">Search...</span>
            <kbd className="hidden lg:inline-flex px-1.5 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 rounded">
              ⌘K
            </kbd>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-black" />
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`p-3 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer ${
                          n.unread
                            ? 'bg-emerald-50/50 dark:bg-emerald-900/10'
                            : ''
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {n.unread && (
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                          )}
                          <div className={n.unread ? '' : 'ml-4'}>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {n.text}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                              {n.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full text-center text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 py-1">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-sm font-medium">
              JQ
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white leading-tight">
                Joshua A. Quitoy
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Editor-in-Chief
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
