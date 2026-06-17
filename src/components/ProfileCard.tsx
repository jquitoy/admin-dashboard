import { MapPin, Calendar, Link as LinkIcon, Mail } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  banner: string;
  bio: string;
  location: string;
  joinDate: string;
  website: string;
  email: string;
  followers: number;
  following: number;
  posts: number;
}

export default function ProfileCard({
  name,
  role,
  avatar,
  banner,
  bio,
  location,
  joinDate,
  website,
  email,
  followers,
  following,
  posts,
}: ProfileCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Banner */}
      <div className="h-32 sm:h-40 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

      {/* Avatar section */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 sm:-mt-16">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 border-white dark:border-gray-900 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-3xl font-bold shadow-lg">
            {avatar}
          </div>
          <div className="flex-1 pt-2 sm:pt-0 sm:pb-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{role}</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{bio}</p>

        {/* Details */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Joined {joinDate}
          </span>
          <a href="#" className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline">
            <LinkIcon className="w-3.5 h-3.5" />
            {website}
          </a>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            {email}
          </span>
        </div>

        {/* Stats */}
        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800">
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">{posts.toLocaleString()}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">{followers.toLocaleString()}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">{following.toLocaleString()}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
