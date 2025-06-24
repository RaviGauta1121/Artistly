// Dummy data for the Artistically app
export const dummyData = {
  artists: [
    {
      id: "1",
      name: "Sarah Johnson",
      category: ["Singer", "Performer"],
      priceRange: "$500-1000",
      location: "New York, NY",
      rating: 4.8,
      image:
        "https://yt3.googleusercontent.com/ytc/AIdro_koMc36Ba_cYlL25RAp8KJ5mCND31bus9w22-SYgyxV=s900-c-k-c0x00ffffff-no-rj",
      bio: "Professional vocalist with 10+ years experience",
      languages: ["English", "Spanish"],
      fee: "$500-1000",
    },
    {
      id: "2",
      name: "Mike Chen",
      category: ["DJ", "Music Producer"],
      priceRange: "$300-800",
      location: "Los Angeles, CA",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Electronic music specialist and event DJ",
      languages: ["English", "Mandarin"],
      fee: "$300-800",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      category: ["Dancer", "Choreographer"],
      priceRange: "$400-900",
      location: "Miami, FL",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Contemporary and Latin dance specialist",
      languages: ["English", "Spanish", "Portuguese"],
      fee: "$400-900",
    },
    {
      id: "4",
      name: "David Thompson",
      category: ["Speaker", "Motivational Coach"],
      priceRange: "$1000-2500",
      location: "Chicago, IL",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Corporate speaker and leadership coach",
      languages: ["English"],
      fee: "$1000-2500",
    },
    {
      id: "5",
      name: "Lisa Park",
      category: ["Singer", "Songwriter"],
      priceRange: "$600-1200",
      location: "Seattle, WA",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Indie folk artist and songwriter",
      languages: ["English", "Korean"],
      fee: "$600-1200",
    },
    {
      id: "6",
      name: "Carlos Martinez",
      category: ["DJ", "Producer"],
      priceRange: "$400-1000",
      location: "Austin, TX",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Latin music DJ and producer",
      languages: ["English", "Spanish"],
      fee: "$400-1000",
    },
  ],
  categories: [
    {
      name: "Singers",
      icon: "🎤",
      count: 150,
    },
    {
      name: "Dancers",
      icon: "💃",
      count: 85,
    },
    {
      name: "Speakers",
      icon: "🎙️",
      count: 120,
    },
    {
      name: "DJs",
      icon: "🎧",
      count: 200,
    },
  ],
};

// Export individual arrays for convenience
export const mockArtists = dummyData.artists;
export const categories = dummyData.categories;
