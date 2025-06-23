import React, { useState, useEffect } from "react";
import { Search, MapPin, Users, Grid3X3, List, X, Filter } from "lucide-react";
import { Artist } from "@/app/page"; // Adjust path as needed

interface ArtistCardProps {
  artist: Artist;
  viewMode: 'list' | 'grid';
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300">
        <div className="flex items-center gap-6">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100"
          />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-bold text-xl text-gray-900">{artist.name}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {artist.category.map(cat => (
                    <span key={cat} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-indigo-500" />
                  <span>{artist.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-lg font-bold text-indigo-600">
                    {artist.priceRange || artist.fee}
                  </div>
                  {artist.rating && (
                    <div className="text-sm text-gray-500">
                      ⭐ {artist.rating}
                    </div>
                  )}
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold">
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {artist.rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <span className="text-sm font-bold text-amber-600">⭐ {artist.rating}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-3">{artist.name}</h3>
        <div className="space-y-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {artist.category.map(cat => (
              <span key={cat} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium">
                {cat}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-indigo-500" />
            {artist.location}
          </div>
          <div className="text-lg font-bold text-indigo-600">
            {artist.priceRange || artist.fee}
          </div>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold">
          Ask for Quote
        </button>
      </div>
    </div>
  );
};

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ value, onChange, options, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

interface ArtistListingPageProps {
  artists: Artist[];
}

const ArtistListingPage: React.FC<ArtistListingPageProps> = ({ artists }) => {
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artists);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    let filtered = artists;

    if (filters.category) {
      filtered = filtered.filter((artist) =>
        artist.category.includes(filters.category)
      );
    }

    if (filters.location) {
      filtered = filtered.filter((artist) =>
        artist.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (artist) => (artist.priceRange || artist.fee) === filters.priceRange
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.category.some((cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredArtists(filtered);
  }, [filters, searchTerm, artists]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
      priceRange: "",
    });
    setSearchTerm("");
  };

  const hasActiveFilters = filters.category || filters.location || filters.priceRange || searchTerm;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Discover Artists
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect performer for your next event from our curated collection of talented artists
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-indigo-600" size={24} />
            <h2 className="text-xl font-semibold text-gray-900">Find Your Perfect Artist</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search artists, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 placeholder-gray-500"
              />
            </div>

            <FilterSelect
              value={filters.category}
              onChange={(value) => handleFilterChange("category", value)}
              options={[
                "Singer", "Dancer", "Speaker", "DJ",
                "Music Producer", "Choreographer", "Motivational Coach", "Songwriter", "Producer", "Performer"
              ]}
              placeholder="Category"
            />

            <FilterSelect
              value={filters.priceRange}
              onChange={(value) => handleFilterChange("priceRange", value)}
              options={[
                "$300-800", "$400-900", "$400-1000", "$500-1000", "$600-1200", "$1000-2500"
              ]}
              placeholder="Price Range"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50"
              />
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-sm border border-white/20">
              <p className="text-lg font-semibold text-gray-900">
                {filteredArtists.length}
                <span className="text-gray-600 font-normal ml-1">
                  {filteredArtists.length === 1 ? 'artist found' : 'artists found'}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-sm border border-white/20">
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
                title="Grid View"
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
                title="List View"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Artist Grid/List */}
        {filteredArtists.length > 0 ? (
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }>
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12 max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <Users size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No artists found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any artists matching your criteria. Try adjusting your filters or search terms.
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistListingPage;
