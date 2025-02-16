import NoImage from "@/public/assets/no-profile.png";
import Image from "next/image";

const ProfileImg = () => {
  return (
    <Image
      src={NoImage}
      height={100}
      width={100}
      alt="Profile Image"
      className="text-[#C5A572] hover:text-[#D4B684] h-8 w-8 rounded-full ring-2 ring-[#C5A572]/50"
    />
  );
};

export default ProfileImg;
