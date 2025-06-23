"use client";
import React, { useState } from 'react';
import { ManagerDashboard } from '@/component/ManagerDashboard/ManagerDashboard';
import ArtistOnboardingForm from '../component/ArtistOnboardingForm/ArtistOnboardingForm';
import { ArtistFormData } from '../component/ArtistOnboardingForm/ArtistOnboardingForm';
import ArtistListingPage from '@/component/ArtistListingPage/ArtistListingPage';
import HomePage from '@/component/HomePage/HomePage';
import Navigation from '@/component/Navigation/Navigation';
// Import the data from TypeScript module
import { mockArtists, categories } from '../data/dummyData';

// Type Definitions
interface Artist {
  id: string;
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
  image: string;
  rating?: number;
  availability?: string;
  priceRange?: string;
}

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

interface ArtistRowProps {
  artist: Artist;
  isSelected: boolean;
  onSelect: (artistId: string) => void;
}

// Main App Component
const ArtistlyApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [artists, setArtists] = useState<Artist[]>(mockArtists);
  const [onboardedArtists, setOnboardedArtists] = useState<Artist[]>([]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage categories={categories} />;
      case 'artists':
        return <ArtistListingPage artists={artists} />;
      case 'onboard':
        return <ArtistOnboardingForm onSubmit={handleArtistSubmit} />;
      case 'dashboard':
        return <ManagerDashboard artists={onboardedArtists} />;
      default:
        return <HomePage categories={categories} />;
    }
  };

  const handleArtistSubmit = (artistData: ArtistFormData) => {
    const newArtist: Artist = {
      ...artistData,
      id: (onboardedArtists.length + 100).toString(),
      rating: 0,
      priceRange: artistData.fee
    };
    setOnboardedArtists(prev => [...prev, newArtist]);
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default ArtistlyApp;
export type { Artist, FilterProps, FormFieldProps, StatsCardProps, ArtistRowProps };
export { mockArtists, categories };