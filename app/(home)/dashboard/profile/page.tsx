import ImageSection from "@/components/profile/ImageSection";
import ProfileInfo from "@/components/profile/ProfileInfo";
import { auth } from "@/lib/auth/auth";
import { getUserProfile } from "@/lib/user";
import { ApiResponse } from "@/types/ApiResponse";
import { User } from "@/types/User";

const ProfilePage = async () => {
  const session = await auth();
  const response = (await getUserProfile({
    userId: session?.user.id,
  })) as ApiResponse<User>;

  const user = response?.data;

  return (
    <div className="p-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-[#C5A572]">Profile</h1>
      </div>

      <div className="flex flex-col p-8">
        <ImageSection image={user?.profileImg} />
        <ProfileInfo user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
