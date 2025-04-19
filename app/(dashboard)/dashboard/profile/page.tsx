"use client";
import ImageSection from "@/components/profile/ImageSection";
import ProfileDetails from "@/components/profile/ProfileDetails";

const ProfilePage = () => {
  return (
    <div className="p-10">
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-[#C5A572]">Profile</h1>
      </header>

      <main className="flex flex-col p-8">
        <ImageSection />
        <ProfileDetails />
      </main>
    </div>
  );
};

export default ProfilePage;
