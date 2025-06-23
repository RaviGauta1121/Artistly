import React from "react";
import { FeatureCard } from "../Card/Cat&Feat";
import { CategoryCard } from "../Card/Cat&Feat";

// Define the type for category
interface Category {
  name: string;
  icon: string;
  count: number;
}

// Define props interface
interface HomePageProps {
  categories: Category[];
}

const HomePage: React.FC<HomePageProps> = ({ categories }) => {
  return (
    <div className="min-h-screen">
     
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
          
            <div className="mb-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Connect with Top
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 animate-pulse">
                  Performing Artists
                </span>
              </h1>
              <div className="flex justify-center items-center space-x-2 mt-4">
                <div className="w-12 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-6 h-1 bg-yellow-300 rounded-full animate-pulse animation-delay-500"></div>
                <div className="w-8 h-1 bg-yellow-500 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up animation-delay-300">
              The premier platform for event planners and artist managers to
              <span className="text-yellow-300 font-semibold"> discover, connect, and book </span>
              exceptional talent for unforgettable events.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/25 hover:shadow-3xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explore Artists</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative border-3 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/10">
                <span className="flex items-center justify-center space-x-2">
                  <span>Join as Artist</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80 animate-fade-in-up animation-delay-900">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-900 font-bold text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">500+ Verified Artists</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-900 font-bold text-sm">★</span>
                </div>
                <span className="text-sm font-medium">4.9/5 Average Rating</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-purple-900 font-bold text-sm">⚡</span>
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Categories Section with Enhanced Styling */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23666' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span>Popular Categories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Browse by 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Category</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect artist for your event from our diverse categories
              of talented performers, each verified for quality and professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>View All Categories</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Styling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200 to-orange-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></span>
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600"> Artistly?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide everything you need to discover, connect, and book amazing artists for your events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "🎯",
                title: "Curated Talent",
                description: "Hand-picked artists verified for quality and professionalism through our rigorous screening process"
              },
              {
                icon: "⚡",
                title: "Quick Booking",
                description: "Streamlined process from discovery to confirmed booking with instant communication tools"
              },
              {
                icon: "🛡️",
                title: "Secure Platform",
                description: "Protected transactions, reliable communication tools, and comprehensive insurance coverage"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of event planners who trust Artistly to find the perfect talent
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-105">
                  Start Browsing Artists
                </button>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
      `}</style>
    </div>
  );
};

export default HomePage;