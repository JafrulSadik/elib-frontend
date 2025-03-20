import NoImage from "@/public/assets/no-profile.png";
import Image from "next/image";

type Props = {
  image?: string;
};

const ProfileImg = ({ image }: Props) => {
  return (
    <Image
      src={image || NoImage}
      height={100}
      width={100}
      alt="Profile Image"
      className="text-[#C5A572] ring-1 ring-textPrimary hover:text-[#D4B684] size-6 md:size-8 rounded-full"
    />
  );
};

export default ProfileImg;
