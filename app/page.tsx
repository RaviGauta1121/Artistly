"use client";

import React, { useState } from 'react';
import { ManagerDashboard } from '@/component/ManagerDashboard/ManagerDashboard';
import ArtistOnboardingForm from '../component/ArtistOnboardingForm/ArtistOnboardingForm';
import { ArtistFormData } from '../component/ArtistOnboardingForm/ArtistOnboardingForm';
import ArtistListingPage from '@/component/ArtistListingPage/ArtistListingPage';
import HomePage from '@/component/HomePage/HomePage';
import Navigation from '@/component/Navigation/Navigation';
import { mockArtists, categories } from '../data/dummyData';
import { Artist } from '@/types/artistTypes';

const ArtistlyApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [artists, setArtists] = useState<Artist[]>(mockArtists);
  const [onboardedArtists, setOnboardedArtists] = useState<Artist[]>([]);

  const renderPage = () => {
    switch (currentPage) {
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
      <main>{renderPage()}</main>
    </div>
  );
};

export default ArtistlyApp;
