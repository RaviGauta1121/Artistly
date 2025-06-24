import React from 'react';
import { MapPin, Star, DollarSign } from 'lucide-react';

import { Artist } from '@/types/artistTypes';

interface ArtistCardProps {
  artist: Artist;
  viewMode: 'list' | 'grid';
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{artist.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <span>{artist.category.join(', ')}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={14} className="text-gray-500" />
                  {artist.location}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm mb-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="font-medium">{artist.rating}</span>
                  </div>
                  <div className="text-sm font-semibold text-indigo-600">
                    {artist.priceRange || artist.fee}
                  </div>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  Ask for Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900 text-lg">{artist.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="text-yellow-500 fill-current" />
            <span className="font-medium">{artist.rating}</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex flex-wrap gap-1">
            {artist.category.map(cat => (
              <span key={cat} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded font-medium">
                {cat}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={14} className="text-gray-500" />
            {artist.location}
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
            <DollarSign size={14} />
            {artist.priceRange || artist.fee}
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
          Ask for Quote
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;