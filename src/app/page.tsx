import StatCard from '@/components/StatCart';
import DataTable from '@/components/DataTable';
import {
  Eye,
  Heart,
  Share2,
  MessageCircle,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Reach',
    value: '24.5K',
    change: '12.3%',
    changeType: 'positive' as const,
    icon: Eye,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    subtitle: 'Across all platforms',
  },
  {
    title: 'Engagements',
    value: '8,241',
    change: '8.1%',
    changeType: 'positive' as const,
    icon: Heart,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    subtitle: 'Likes, shares, comments',
  },
  {
    title: 'New Followers',
    value: '1,204',
    change: '3.2%',
    changeType: 'positive' as const,
    icon: Users,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    subtitle: 'This week',
  },
  {
    title: 'Pending Articles',
    value: '12',
    change: '2',
    changeType: 'negative' as const,
    icon: Clock,
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    subtitle: 'Awaiting review',
  },
];

const recentArticles = [
  { title: 'Campus Sustainability Initiative Gains Momentum', author: 'Maria Santos', status: 'Published', date: '2026-06-15', views: 1423, engagement: '89%' },
  { title: 'Student Council Elections: Meet the Candidates', author: 'James Reyes', status: 'Published', date: '2026-06-14', views: 2105, engagement: '94%' },
  { title: 'New Library Hours Announced for Summer', author: 'Ana Lopez', status: 'Review', date: '2026-06-13', views: 876, engagement: '72%' },
  { title: 'Professor of the Year: Award Winners', author: 'Carlos Mendoza', status: 'Draft', date: '2026-06-12', views: 0, engagement: '0%' },
  { title: 'Tech Summit 2026: What to Expect', author: 'Jamie Dela Cruz', status: 'Published', date: '2026-06-11', views: 1892, engagement: '91%' },
];

const columns = [
  { key: 'title', header: 'Article' },
  { key: 'author', header: 'Author' },
  {
    key: 'status',
    header: 'Status',
    render: (item: Record<string, unknown>) => {
      const statusColors: Record<string, string> = {
        Published: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        Review: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        Draft: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
      };
      return (
        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[item.status as string] || ''}`}>
          {item.status as string}
        </span>
      );
    },
  },
  { key: 'date', header: 'Date' },
  { key: 'views', header: 'Views' },
  { key: 'engagement', header: 'Engagement' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-xl p-6 sm:p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-100 text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Welcome back</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">The Hillside Echo Dashboard</h1>
            <p className="mt-2 text-emerald-100 max-w-xl">
              Your central hub for managing your student publication&apos;s social media presence. Track engagement, manage articles, and grow your audience.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+15.6% this month</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors">
            Create New Post
          </button>
          <button className="px-4 py-2 bg-black/30 text-white rounded-lg text-sm font-medium hover:bg-black/50 transition-colors">
            View Analytics
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Activity & Recent Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Overview */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Platform Overview</h3>
          <div className="space-y-4">
            {[
              { platform: 'Facebook', followers: '8,432', growth: '+5.2%', color: 'bg-emerald-500' },
              { platform: 'Twitter / X', followers: '6,891', growth: '+8.7%', color: 'bg-green-500' },
              { platform: 'Instagram', followers: '12,456', growth: '+15.3%', color: 'bg-teal-500' },
              { platform: 'TikTok', followers: '7,234', growth: '+22.1%', color: 'bg-black dark:bg-white' },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${p.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{p.platform}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{p.followers} followers</p>
                </div>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{p.growth}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Articles Table */}
        <div className="lg:col-span-2">
          <DataTable
            title="Recent Articles"
            description="Latest articles from The Hillside Echo editorial team"
            columns={columns}
            data={recentArticles}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Schedule Post', desc: 'Plan your next article release', icon: Clock, color: 'from-emerald-500 to-green-600' },
          { label: 'Engage Audience', desc: 'Respond to comments & messages', icon: MessageCircle, color: 'from-green-500 to-teal-600' },
          { label: 'Share Updates', desc: 'Cross-post to all platforms', icon: Share2, color: 'from-black to-gray-800' },
        ].map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-md transition-all text-left group"
          >
            <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color} text-white`}>
              <action.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {action.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{action.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
