import ProfileCard from '@/components/ProfileCard';
import StatCard from '@/components/StatCart';
import { Award, BookOpen, Code, Globe, PenTool, Star } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <ProfileCard
        name="Jamie Dela Cruz"
        role="Editor-in-Chief — The Hillside Echo"
        avatar="JD"
        banner=""
        bio="Passionate student journalist and content creator. Leading The Hillside Echo's digital transformation and social media growth. Covering campus news, student life, and university events with a fresh perspective."
        location="University Campus"
        joinDate="September 2023"
        website="hillsideecho.edu"
        email="jamie.delacruz@university.edu"
        followers={2847}
        following={523}
        posts={589}
      />

      {/* Skills & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Star className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Skills & Expertise</h2>
          </div>

          {[
            { skill: 'Content Writing', level: 95, icon: PenTool },
            { skill: 'Social Media Management', level: 90, icon: Globe },
            { skill: 'Photo & Video Editing', level: 80, icon: Award },
            { skill: 'Data Journalism', level: 75, icon: Code },
            { skill: 'Public Speaking', level: 85, icon: BookOpen },
          ].map(({ skill, level, icon: Icon }) => (
            <div key={skill} className="mb-4 last:mb-0">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Educational Background */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Educational Background</h2>
          </div>

          <div className="space-y-5">
            <div className="relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-800">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-black dark:bg-white" />
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Bachelor of Arts in Communication</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">2023 — Present</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Major in Journalism, Minor in Digital Media. Dean&apos;s Lister. Editor of The Hillside Echo.
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-gray-400" />
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Senior High School — STEM Strand</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">2021 — 2023</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Graduated with Honors. Member of the school publication.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {['Digital Journalism', 'Social Media Strategy', 'Data Visualization', 'Content Marketing'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  <Award className="w-3 h-3" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Published article', detail: '"Tech Summit 2026: What to Expect"', time: '2 hours ago', type: 'publish' },
            { action: 'Reached milestone', detail: '2,500 followers on Instagram', time: '1 day ago', type: 'milestone' },
            { action: 'Edited article', detail: '"Student Council Elections Guide"', time: '2 days ago', type: 'edit' },
            { action: 'Scheduled post', detail: 'Campus event coverage for Friday', time: '3 days ago', type: 'schedule' },
            { action: 'Responded to comments', detail: '15 replies on Facebook post', time: '4 days ago', type: 'comment' },
          ].map((activity, i) => (
            <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
              <div className={`p-1.5 rounded-full ${
                activity.type === 'publish' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' :
                activity.type === 'milestone' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' :
                'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              }`}>
                <PenTool className="w-3 h-3" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{activity.action}</span> {activity.detail}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
