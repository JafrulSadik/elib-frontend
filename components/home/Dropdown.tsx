"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  options: string[];
  selected: string;
  label: string;
  onSelect: (value: string) => void;
};

const Dropdown = ({ options, selected, onSelect, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-[#2B1810] text-[#C5A572] rounded-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
      >
        <span className="text-sm">{selected}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-[#2B1810] border border-[#C5A572]/20 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-[#C5A572] hover:bg-[#3D261C] first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
