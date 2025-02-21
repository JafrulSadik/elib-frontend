import ImageSection from "@/components/profile/ImageSection";
import ProfileInfo from "@/components/profile/ProfileInfo";

const ProfilePage = () => {
  return (
    <div className="p-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-[#C5A572]">Profile</h1>
      </div>

      <div className="rounded-lg p-8 max-w-3xl mx-auto">
        <ImageSection />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default ProfilePage;
