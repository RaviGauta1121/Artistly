import React, { useState } from 'react';
import { Users, Calendar, Clock, DollarSign, Palette, Music, Star, MapPin } from 'lucide-react';

// Mock Artist type for demo
interface Artist {
  id: string;
  name: string;
  category: string;
  location: string;
  fee: string;
  languages: string[];
  avatar?: string;
  rating?: number;
  status?: 'active' | 'pending' | 'inactive';
}

// Mock StatCard component
const StatCard = ({ title, value, icon, color, gradient }: any) => (
  <div className={`${gradient} rounded-xl p-6 shadow-lg border border-white/20 backdrop-blur-sm`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-white/80 mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  </div>
);

// Mock ArtistTableRow component
const ArtistTableRow = ({ artist, isSelected, onSelect }: any) => (
  <tr className="hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all duration-200">
    <td className="px-6 py-4">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
          {artist.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{artist.name}</div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Star size={12} className="text-yellow-400 fill-current" />
            <span>{artist.rating || 4.8}</span>
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border border-teal-200">
        <Palette size={12} className="mr-1" />
        {artist.category}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-1 text-gray-600">
        <MapPin size={14} className="text-indigo-500" />
        <span>{artist.location}</span>
      </div>
    </td>
    <td className="px-6 py-4">
      <span className="font-semibold text-emerald-700">{artist.fee}</span>
    </td>
    <td className="px-6 py-4">
      <div className="flex flex-wrap gap-1">
        {artist.languages.map((lang: string, idx: number) => (
          <span key={idx} className="px-2 py-1 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 text-xs rounded-md border">
            {lang}
          </span>
        ))}
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md">
          View
        </button>
        <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-lg text-sm hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md">
          Book
        </button>
      </div>
    </td>
  </tr>
);

interface ManagerDashboardProps {
  artists?: Artist[];
}

interface SortButtonProps {
  field: keyof Artist;
  children: React.ReactNode;
}

export const ManagerDashboard: React.FC<ManagerDashboardProps> = ({ 
  artists = [
    {
      id: '1',
      name: 'Maya Patel',
      category: 'Classical Dance',
      location: 'Mumbai, India',
      fee: '₹15,000 - ₹25,000',
      languages: ['Hindi', 'English', 'Marathi'],
      rating: 4.9,
      status: 'active'
    },
    {
      id: '2',
      name: 'Arjun Sharma',
      category: 'Folk Music',
      location: 'Rajasthan, India',
      fee: '₹20,000 - ₹35,000',
      languages: ['Hindi', 'Rajasthani'],
      rating: 4.7,
      status: 'active'
    },
    {
      id: '3',
      name: 'Priya Nair',
      category: 'Contemporary Art',
      location: 'Kerala, India',
      fee: '₹12,000 - ₹20,000',
      languages: ['Malayalam', 'English'],
      rating: 4.8,
      status: 'pending'
    }
  ]
}) => {
  const [sortField, setSortField] = useState<keyof Artist>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const sortedArtists = [...artists].sort((a, b) => {
    const aValue = a[sortField]?.toString().toLowerCase() || '';
    const bValue = b[sortField]?.toString().toLowerCase() || '';

    return sortDirection === 'asc'
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const handleSort = (field: keyof Artist) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = () => {
    setSelectedArtists(
      selectedArtists.length === artists.length ? [] : artists.map(artist => artist.id)
    );
  };

  const handleSelectArtist = (artistId: string) => {
    setSelectedArtists(prev =>
      prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  const SortButton: React.FC<SortButtonProps> = ({ field, children }) => (
    <button
      onClick={() => handleSort(field)}
      className={`flex items-center gap-1 hover:text-indigo-600 transition-colors duration-200 ${
        sortField === field ? 'text-indigo-600' : 'text-gray-700'
      }`}
    >
      {children}
      {sortField === field && (
        <span className="text-xs text-indigo-500">{sortDirection === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Palette className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                Artist Manager Dashboard
              </h1>
              <p className="text-gray-600">Discover, manage, and book exceptional artists for your events</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Artists"
            value={artists.length}
            icon="🎭"
            gradient="bg-gradient-to-br from-indigo-500 to-indigo-600"
          />
          <StatCard
            title="Active Bookings"
            value="12"
            icon="🎪"
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
          />
          <StatCard
            title="Pending Requests"
            value="8"
            icon="⭐"
            gradient="bg-gradient-to-br from-amber-500 to-orange-500"
          />
          <StatCard
            title="Total Revenue"
            value="₹2,45,000"
            icon="💎"
            gradient="bg-gradient-to-br from-purple-500 to-pink-600"
          />
        </div>

        {/* Artists Table */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="px-6 py-6 border-b border-gray-200/50 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Music className="text-indigo-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Artist Portfolio</h2>
              </div>
              {selectedArtists.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-full">
                    {selectedArtists.length} selected
                  </span>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-md">
                    Bulk Actions
                  </button>
                </div>
              )}
            </div>
          </div>

          {artists.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={48} className="text-indigo-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No artists discovered yet</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Start building your artist network! New submissions and discoveries will appear here as your platform grows.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedArtists.length === artists.length && artists.length > 0}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <SortButton field="name">Artist</SortButton>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <SortButton field="category">Specialty</SortButton>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <SortButton field="location">Location</SortButton>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      <SortButton field="fee">Fee Range</SortButton>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Languages
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white/50 divide-y divide-gray-200/50">
                  {sortedArtists.map(artist => (
                    <ArtistTableRow
                      key={artist.id}
                      artist={artist}
                      isSelected={selectedArtists.includes(artist.id)}
                      onSelect={() => handleSelectArtist(artist.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};