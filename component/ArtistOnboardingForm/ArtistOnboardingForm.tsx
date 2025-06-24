import React, { useState } from "react";
import {
  Upload,
  User,
  MapPin,
  DollarSign,
  Globe,
  Star,
  Sparkles,
} from "lucide-react";

export interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
  image: string;
}

// FormField component
const FormField: React.FC<{
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ label, error, required, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-800">
      {label}
      {required && <span className="text-purple-500 ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-sm text-red-500 flex items-center gap-1">
        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
        {error}
      </p>
    )}
  </div>
);

const ArtistOnboardingForm: React.FC<{
  onSubmit?: (artistData: ArtistFormData) => void;
}> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ArtistFormData>({
    name: "",
    bio: "",
    category: [],
    languages: [],
    fee: "",
    location: "",
    image: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const categoryOptions = [
    "Singer",
    "Dancer",
    "Speaker",
    "DJ",
    "Music Producer",
    "Choreographer",
    "Motivational Coach",
    "Songwriter",
    "Producer",
    "Performer",
  ];
  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Mandarin",
    "Japanese",
    "Korean",
    "Hindi",
    "Arabic",
  ];
  const feeOptions = [
    "$200-500",
    "$300-800",
    "$400-900",
    "$500-1000",
    "$600-1200",
    "$800-1500",
    "$1000-2500",
    "$2000+",
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.bio.trim()) newErrors.bio = "Bio is required";
    else if (formData.bio.length < 20)
      newErrors.bio = "Bio must be at least 20 characters";

    if (formData.category.length === 0)
      newErrors.category = "At least one category is required";
    if (formData.languages.length === 0)
      newErrors.languages = "At least one language is required";
    if (!formData.fee) newErrors.fee = "Fee range is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert("Form submitted successfully!");
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ArtistFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleMultiSelect = (field: keyof ArtistFormData, value: string) => {
    if (field === "category" || field === "languages") {
      setFormData((prev) => ({
        ...prev,
        [field]: prev[field].includes(value)
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      }));
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Artist Onboarding
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our platform and connect with event planners worldwide.
            Showcase your talent and grow your career.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="space-y-10">
                {/* Basic Info Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl">
                      <User className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Basic Information
                    </h2>
                  </div>

                  <FormField label="Full Name" error={errors.name} required>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={` text-blue-300 w-full px-4 py-4 border-2 rounded-2xl bg-gray-50/50 focus:bg-white transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                          errors.name
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </FormField>

                  <FormField label="Bio" error={errors.bio} required>
                    <div className="relative">
                      <textarea
                        value={formData.bio}
                        onChange={(e) =>
                          handleInputChange("bio", e.target.value)
                        }
                        rows={5}
                        className={`text-blue-300 w-full px-4 py-4  border-2 rounded-2xl bg-gray-50/50 focus:bg-white transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 resize-none ${
                          errors.bio
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="Tell us about yourself and your experience... Share your story, achievements, and what makes you unique as an artist."
                      />
                      <div className="flex justify-between items-center mt-2">
                        <p
                          className={`text-sm ${
                            formData.bio.length < 20
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {formData.bio.length}/500 characters (minimum 20)
                        </p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                formData.bio.length >= star * 20
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </FormField>

                  <FormField label="Location" error={errors.location} required>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className={`text-blue-300 w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-gray-50/50 focus:bg-white transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                          errors.location
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="City, State"
                      />
                    </div>
                  </FormField>
                </div>

                {/* Professional Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl">
                      <Star className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Professional Details
                    </h2>
                  </div>

                  <FormField
                    label="Categories"
                    error={errors.category}
                    required
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {categoryOptions.map((category) => (
                        <div
                          key={category}
                          className="group cursor-pointer"
                          onClick={() =>
                            handleMultiSelect("category", category)
                          }
                        >
                          <div
                            className={`relative p-4 border-2 rounded-2xl transition-all duration-200 ${
                              formData.category.includes(category)
                                ? "border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-md"
                                : "border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-100/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.category.includes(category)}
                              onChange={() =>
                                handleMultiSelect("category", category)
                              }
                              className=" text-blue-300 absolute top-3 right-3 w-5 h-5 text-purple-600 border-2 border-gray-300 rounded-md focus:ring-purple-500"
                            />
                            <span
                              className={`text-sm font-medium ${
                                formData.category.includes(category)
                                  ? "text-purple-700"
                                  : "text-gray-700"
                              }`}
                            >
                              {category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FormField>

                  <FormField
                    label="Languages Spoken"
                    error={errors.languages}
                    required
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {languageOptions.map((language) => (
                        <div
                          key={language}
                          className="group cursor-pointer"
                          onClick={() =>
                            handleMultiSelect("languages", language)
                          }
                        >
                          <div
                            className={`relative p-4 border-2 rounded-2xl transition-all duration-200 ${
                              formData.languages.includes(language)
                                ? "border-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-md"
                                : "border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-100/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.languages.includes(language)}
                              onChange={() =>
                                handleMultiSelect("languages", language)
                              }
                              className="text-blue-300 absolute top-3 right-3 w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded-md focus:ring-indigo-500"
                            />
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-gray-400" />
                              <span
                                className={`text-sm font-medium ${
                                  formData.languages.includes(language)
                                    ? "text-indigo-700"
                                    : "text-gray-700"
                                }`}
                              >
                                {language}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FormField>

                  <FormField label="Fee Range" error={errors.fee} required>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={formData.fee}
                        onChange={(e) =>
                          handleInputChange("fee", e.target.value)
                        }
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl bg-gray-50/50 focus:bg-white transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 ${
                          errors.fee
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <option value="">Select fee range</option>
                        {feeOptions.map((fee) => (
                          <option key={fee} value={fee}>
                            {fee}
                          </option>
                        ))}
                      </select>
                    </div>
                  </FormField>

                  <FormField label="Profile Image (Optional)">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        {formData.image ? (
                          <div className="relative">
                            <img
                              src={formData.image}
                              alt="Preview"
                              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                            <Upload size={28} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          type="url"
                          value={formData.image}
                          onChange={(e) =>
                            handleInputChange("image", e.target.value)
                          }
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50/50 focus:bg-white transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 hover:border-gray-300"
                          placeholder="Enter image URL (or leave blank for default)"
                        />
                        <p className="text-blue-300 text-sm  mt-2 flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Paste an image URL or leave blank for a default avatar
                        </p>
                      </div>
                    </div>
                  </FormField>
                </div>

                {/* Submit Button */}
                <div className="pt-8 border-t border-gray-200">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-6 px-8 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed scale-95"
                        : "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-2xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Sparkles className="w-6 h-6" />
                        Submit Application
                        <Sparkles className="w-6 h-6" />
                      </span>
                    )}
                  </button>
                </div>

                {/* Form Preview */}
                {(formData.name ||
                  formData.bio ||
                  formData.category.length > 0) && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      Preview
                    </h3>
                    <div className="space-y-3 text-sm">
                      {formData.name && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Name:
                          </span>{" "}
                          {formData.name}
                        </p>
                      )}
                      {formData.location && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Location:
                          </span>{" "}
                          {formData.location}
                        </p>
                      )}
                      {formData.category.length > 0 && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Categories:
                          </span>{" "}
                          {formData.category.join(", ")}
                        </p>
                      )}
                      {formData.languages.length > 0 && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Languages:
                          </span>{" "}
                          {formData.languages.join(", ")}
                        </p>
                      )}
                      {formData.fee && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Fee Range:
                          </span>{" "}
                          {formData.fee}
                        </p>
                      )}
                      {formData.bio && (
                        <p>
                          <span className="font-semibold text-gray-700">
                            Bio:
                          </span>{" "}
                          {formData.bio.substring(0, 100)}
                          {formData.bio.length > 100 ? "..." : ""}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistOnboardingForm;
