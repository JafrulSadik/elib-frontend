import { Pencil } from "lucide-react";

const ImageSection = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#C5A572]"
        />
        <button className="absolute bottom-0 right-0 bg-[#C5A572] p-2 rounded-full">
          <Pencil className="w-4 h-4 text-[#1b1a18]" />
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
