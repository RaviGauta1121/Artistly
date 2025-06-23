import React, { useState } from 'react';

interface Artist {
  name: string;
  bio: string;
  image?: string;
  category: string[];
  location: string;
  fee?: string;
  priceRange?: string;
  languages?: string[];
}

interface ArtistTableRowProps {
  artist: Artist;
  isSelected: boolean;
  onSelect: () => void;
}

export const ArtistTableRow: React.FC<ArtistTableRowProps> = ({ artist, isSelected, onSelect }) => {
  const [showActions, setShowActions] = useState<boolean>(false);

  return (
    <tr className={`hover:bg-gray-50 ${isSelected ? 'bg-purple-50' : ''}`}>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={artist.image || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face'}
            alt={artist.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <div className="text-sm font-medium text-gray-900">{artist.name}</div>
            <div className="text-sm text-gray-500 truncate max-w-xs">{artist.bio}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap gap-1">
          {artist.category.slice(0, 2).map((cat: string) => (
            <span key={cat} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
              {cat}
            </span>
          ))}
          {artist.category.length > 2 && (
            <span className="text-xs text-gray-500">+{artist.category.length - 2}</span>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {artist.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
        {artist.fee || artist.priceRange}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {artist.languages?.slice(0, 2).join(', ')}
        {artist.languages && artist.languages.length > 2 && ` +${artist.languages.length - 2}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className="text-purple-600 hover:text-purple-900 px-3 py-1 rounded hover:bg-purple-50"
          >
            Actions
          </button>
          {showActions && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  View Profile
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Edit Details
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-green-700 hover:bg-green-50">
                  Approve
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50">
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};
