import React from 'react';
import { X } from 'lucide-react'; // Make sure lucide-react is installed

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, children, error, required = false }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <X size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
