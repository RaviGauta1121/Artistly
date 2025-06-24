import React, { useState } from 'react';
import { StatCard } from '../StatCard/StatCard'; 
import { ArtistTableRow } from '../ArtisttableRow/ArtistTable'; 
import { Users } from 'lucide-react'; 
import { Artist } from '@/types/artistTypes';

interface ManagerDashboardProps {
  artists: Artist[];
}

interface SortButtonProps {
  field: keyof Artist;
  children: React.ReactNode;
}

export const ManagerDashboard: React.FC<ManagerDashboardProps> = ({ artists }) => {
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
      className={`flex items-center gap-1 hover:text-purple-600 ${
        sortField === field ? 'text-purple-600' : 'text-gray-700'
      }`}
    >
      {children}
      {sortField === field && (
        <span className="text-xs">{sortDirection === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
        <p className="text-gray-600">Manage your artist submissions and bookings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Artists"
          value={artists.length}
          icon="👥"
          color="bg-blue-50 text-blue-600"
        />
        <StatCard
          title="Active Bookings"
          value="12"
          icon="📅"
          color="bg-green-50 text-green-600"
        />
        <StatCard
          title="Pending Requests"
          value="8"
          icon="⏳"
          color="bg-yellow-50 text-yellow-600"
        />
        <StatCard
          title="Total Revenue"
          value="$24,500"
          icon="💰"
          color="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Artists Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Artist Submissions</h2>
            {selectedArtists.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {selectedArtists.length} selected
                </span>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700">
                  Actions
                </button>
              </div>
            )}
          </div>
        </div>

        {artists.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Users size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No artists yet</h3>
            <p className="text-gray-600">
              Artist submissions will appear here once they complete onboarding
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedArtists.length === artists.length && artists.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <SortButton field="name">Artist</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <SortButton field="category">Category</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <SortButton field="location">Location</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <SortButton field="fee">Fee Range</SortButton>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Languages
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
  );
};
