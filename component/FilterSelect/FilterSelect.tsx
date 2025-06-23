import React from 'react';

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

// Filter Select Component
const FilterSelect: React.FC<FilterProps> = ({ value, onChange, options, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
