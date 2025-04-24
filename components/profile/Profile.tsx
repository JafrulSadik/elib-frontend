import ImageSection from "./ImageSection";
import ProfileInfo from "./ProfileDetails";

const Profile = async () => {
  return (
    <div className="flex flex-col p-8">
      <ImageSection />
      <ProfileInfo />
    </div>
  );
};

export default Profile;
