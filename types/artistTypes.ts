export interface Artist {
  id: string;
  name: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
  image: string;
  bio: string;
  rating?: number;
  availability?: string;
  priceRange?: string;
  status?: 'active' | 'pending' | 'inactive';
  avatar?: string;
 
}

export interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

export interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

export interface ArtistRowProps {
  artist: Artist;
  isSelected: boolean;
  onSelect: (artistId: string) => void;
}
