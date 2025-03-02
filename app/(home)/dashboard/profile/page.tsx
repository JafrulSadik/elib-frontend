import ImageSection from "@/components/profile/ImageSection";
import ProfileInfo from "@/components/profile/ProfileInfo";

const ProfilePage = () => {
  return (
    <div className="p-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-[#C5A572]">Profile</h1>
      </div>

      <div className="flex flex-col p-8">
        <ImageSection />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default ProfilePage;
