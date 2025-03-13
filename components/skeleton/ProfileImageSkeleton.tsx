import { Pencil } from "lucide-react";

const ProfileImageSkeleton = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        {/* Skeleton circle for the profile image */}
        <div className="w-32 h-32 rounded-full border-4 border-[#C5A572] bg-gray-200 animate-pulse" />

        {/* Skeleton for the edit button */}
        <div className="absolute top-0 right-3 bg-[#C5A572] p-2 rounded-full">
          <Pencil className="w-4 h-4 text-[#1b1a18]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileImageSkeleton;
