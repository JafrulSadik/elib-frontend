import { Pencil } from "lucide-react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#C5A572]"
          height={150}
          width={150}
        />
        <button className="absolute top-0 right-3 bg-[#C5A572] p-2 rounded-full">
          <Pencil className="w-4 h-4 text-[#1b1a18]" />
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
