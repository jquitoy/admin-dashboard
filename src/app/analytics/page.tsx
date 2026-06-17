'use client';

import StatCard from '@/components/StatCart';
import DataTable from '@/components/DataTable';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Eye,
  Heart,
  Share2,
  MessageCircle,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const engagementData = [
  { month: 'Jan', reach: 4000, engagement: 2400 },
  { month: 'Feb', reach: 3000, engagement: 1398 },
  { month: 'Mar', reach: 5000, engagement: 3800 },
  { month: 'Apr', reach: 4780, engagement: 3908 },
  { month: 'May', reach: 5890, engagement: 4800 },
  { month: 'Jun', reach: 6390, engagement: 5230 },
];

const platformData = [
  { name: 'Instagram', value: 35 },
  { name: 'Facebook', value: 25 },
  { name: 'Twitter / X', value: 20 },
  { name: 'TikTok', value: 20 },
];

const COLORS = ['#10b981', '#059669', '#34d399', '#047857'];

const topPosts = [
  { title: 'Student Council Elections Guide', platform: 'Instagram', likes: 892, shares: 234, comments: 156 },
  { title: 'Campus Sustainability Feature', platform: 'Facebook', likes: 645, shares: 189, comments: 98 },
  { title: 'Professor of the Year Awards', platform: 'Twitter / X', likes: 723, shares: 312, comments: 87 },
  { title: 'Tech Summit 2026 Preview', platform: 'TikTok', likes: 1243, shares: 567, comments: 203 },
  { title: 'New Library Hours Announcement', platform: 'Instagram', likes: 456, shares: 89, comments: 67 },
];

const postColumns = [
  { key: 'title', header: 'Post' },
  { key: 'platform', header: 'Platform' },
  { key: 'likes', header: 'Likes' },
  { key: 'shares', header: 'Shares' },
  { key: 'comments', header: 'Comments' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Overview</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track your publication&apos;s social media performance across all platforms
        </p>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Reach" value="24.5K" change="12.3%" changeType="positive" icon={Eye} iconBg="bg-emerald-100 dark:bg-emerald-900/30" subtitle="Last 30 days" />
        <StatCard title="Total Engagements" value="8,241" change="8.1%" changeType="positive" icon={Heart} iconBg="bg-emerald-100 dark:bg-emerald-900/30" subtitle="Last 30 days" />
        <StatCard title="Total Shares" value="1,892" change="15.6%" changeType="positive" icon={Share2} iconBg="bg-emerald-100 dark:bg-emerald-900/30" subtitle="Last 30 days" />
        <StatCard title="Comments" value="534" change="2.4%" changeType="negative" icon={MessageCircle} iconBg="bg-amber-100 dark:bg-amber-900/30" subtitle="Last 30 days" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Engagement Trend</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Monthly reach vs engagement rate</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" />
              +18.2%
            </span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:opacity-20" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line type="monotone" dataKey="reach" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} name="Reach" />
                <Line type="monotone" dataKey="engagement" stroke="#047857" strokeWidth={2} dot={{ fill: '#047857' }} name="Engagement" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Platform Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value) => <span className="text-xs text-gray-600 dark:text-gray-400">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Weekly Performance</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Posts published vs engagement rate</p>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { day: 'Mon', posts: 4, engagement: 85 },
                { day: 'Tue', posts: 6, engagement: 72 },
                { day: 'Wed', posts: 3, engagement: 91 },
                { day: 'Thu', posts: 7, engagement: 78 },
                { day: 'Fri', posts: 5, engagement: 88 },
                { day: 'Sat', posts: 2, engagement: 95 },
                { day: 'Sun', posts: 1, engagement: 62 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:opacity-20" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="posts" fill="#10b981" radius={[4, 4, 0, 0]} name="Posts" />
              <Bar dataKey="engagement" fill="#047857" radius={[4, 4, 0, 0]} name="Engagement %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Posts */}
      <DataTable
        title="Top Performing Posts"
        description="Highest engagement posts across all platforms"
        columns={postColumns}
        data={topPosts}
      />
    </div>
  );
}
