import { auth } from "@/lib/auth/auth";
import { getUserProfile } from "@/lib/user";
import { ApiResponse } from "@/types/ApiResponse";
import { User } from "@/types/User";
import ImageSection from "./ImageSection";
import ProfileInfo from "./ProfileDetails";

const Profile = async () => {
  const session = await auth();
  const response = (await getUserProfile({
    userId: session?.user.id,
  })) as ApiResponse<User>;

  const user = response?.data;
  return (
    <div className="flex flex-col p-8">
      <ImageSection image={user?.profileImg} />
      <ProfileInfo user={user} />
    </div>
  );
};

export default Profile;
