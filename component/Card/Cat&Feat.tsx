import React from 'react';

interface CategoryCardProps {
  category: {
    icon: React.ReactNode;
    name: string;
    count: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow p-6 text-center cursor-pointer group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600">{category.count}+ Artists</p>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export { CategoryCard, FeatureCard };
