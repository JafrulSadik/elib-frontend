"use client";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import Dropdown from "../home/Dropdown";
import SearchResultCard from "./SearchResultCard";

const categories = [
  "All Categories",
  "Fiction",
  "Non-Fiction",
  "Science",
  "History",
  "Biography",
];
const languages = [
  "All Languages",
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
];
const formats = ["All Formats", "PDF", "EPUB", "MOBI", "Audio Book"];
const ratings = ["All Ratings", "4+ Stars", "3+ Stars", "2+ Stars", "1+ Star"];

type Props = {
  onShowSearch: (value: boolean) => void;
};

const SearchModal = ({ onShowSearch }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("All Languages");
  const [selectedFormat, setSelectedFormat] = useState<string>("All Formats");
  const [selectedRating, setSelectedRating] = useState<string>("All Ratings");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50 overflow-y-auto"
    >
      <div className="bg-[#3D261C] rounded-xl w-full max-w-6xl mx-4 mb-20">
        {/* Search Header */}
        <div className="p-6 border-b border-[#C5A572]/20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for books, authors, or ISBN..."
                  className="w-full px-4 py-3 bg-[#2B1810] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 placeholder-gray-400"
                />
                <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button
              onClick={() => onShowSearch(false)}
              className="px-6 py-3 bg-[#C5A572] text-[#2B1810] rounded-lg hover:bg-[#D4B684] transition duration-300"
            >
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <Dropdown
              options={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              label="Category"
            />
            <Dropdown
              options={languages}
              selected={selectedLanguage}
              onSelect={setSelectedLanguage}
              label="Language"
            />
            <Dropdown
              options={formats}
              selected={selectedFormat}
              onSelect={setSelectedFormat}
              label="Format"
            />
            <Dropdown
              options={ratings}
              selected={selectedRating}
              onSelect={setSelectedRating}
              label="Rating"
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#C5A572]">
              Search Results
            </h2>
            <div className="flex items-center space-x-2 text-[#C5A572]">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Sort by: Latest</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SearchResultCard
                key={i}
                image={`https://images.unsplash.com/photo-${
                  i % 2 === 0
                    ? "1544947950-fa07a98d237f"
                    : "1512820790803-83ca734da794"
                }?auto=format&fit=crop&w=400`}
                title={
                  [
                    "The Art of Programming",
                    "Design Patterns",
                    "Clean Code",
                    "Refactoring",
                    "Domain-Driven Design",
                    "Pragmatic Programmer",
                  ][i - 1]
                }
                author={
                  [
                    "Robert Martin",
                    "Erich Gamma",
                    "Martin Fowler",
                    "Kent Beck",
                    "Eric Evans",
                    "Dave Thomas",
                  ][i - 1]
                }
                rating={4.5 + i * 0.1}
                downloads={1000 + i * 500}
                format={["PDF", "EPUB", "PDF", "MOBI", "PDF", "EPUB"][i - 1]}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-2 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572] hover:bg-[#3D261C] transition duration-300">
              Load More Results
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchModal;
