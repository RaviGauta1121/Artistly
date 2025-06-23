"use client";
import React, { useState } from 'react';
import { Menu, Home, Users, UserPlus, BarChart3, X, Sparkles } from 'lucide-react';

// Type Definitions
interface NavigationItem {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  page: string;
  badge?: string;
}

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  className?: string;
}

// Navigation items configuration
const navigationItems: NavigationItem[] = [
  { name: 'Home', icon: Home, page: 'home' },
  { name: 'Artists', icon: Users, page: 'artists', badge: 'New' },
  { name: 'Onboard Artist', icon: UserPlus, page: 'onboard' },
  { name: 'Dashboard', icon: BarChart3, page: 'dashboard' }
];

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
  className = ""
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-gradient-to-r from-white via-purple-50 to-indigo-50 shadow-lg border-b border-purple-100 sticky top-0 z-50 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          {/* Logo with enhanced styling */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 bg-purple-600 rounded-full opacity-20 animate-ping"></div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                Artistly
              </h1>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handlePageChange(item.page)}
                  className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.page
                      ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/25 ring-2 ring-purple-300'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md hover:shadow-purple-100'
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      currentPage === item.page 
                        ? 'text-white drop-shadow-sm' 
                        : 'group-hover:text-purple-600 group-hover:scale-110'
                    }`} 
                  />
                  <span className="relative">
                    {item.name}
                    {currentPage === item.page && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300 rounded-full"></div>
                    )}
                  </span>
                  {item.badge && currentPage !== item.page && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-xs font-bold text-purple-900 px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
                
                {/* Hover effect indicator */}
                {currentPage !== item.page && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <button className="ml-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile menu button with enhanced styling */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative text-gray-600 hover:text-purple-600 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative">
                {mobileMenuOpen ? (
                  <X size={24} className="transform transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu size={24} className="transform transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with enhanced styling */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-gradient-to-b from-white to-purple-50 border-t border-purple-100 shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handlePageChange(item.page)}
                className={`group relative flex items-center justify-between w-full px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                  currentPage === item.page
                    ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/25'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon 
                    size={22} 
                    className={`transition-all duration-300 ${
                      currentPage === item.page 
                        ? 'text-white' 
                        : 'group-hover:text-purple-600 group-hover:scale-110'
                    }`} 
                  />
                  <span>{item.name}</span>
                </div>
                
                {item.badge && currentPage !== item.page && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-xs font-bold text-purple-900 px-2 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
                
                {currentPage === item.page && (
                  <div className="absolute right-3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-12 py-4 rounded-xl font-bold shadow-lg shadow-yellow-500/25 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// Export the navigation items configuration as well
export { navigationItems };
export type { NavigationItem, NavigationProps };