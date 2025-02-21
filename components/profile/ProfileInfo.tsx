"use client";
import { useState } from "react";
import EditableMenu from "./EditableMenu";

const ProfileInfo = () => {
  const [profile, setProfile] = useState({
    fullName: "Prity Rahman",
    email: "misuk@gmail.com",
    about:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  });

  return (
    <div className="space-y-6">
      <EditableMenu
        field="Full Name"
        type="text"
        value={profile.fullName}
        onChangeValue={(value) => setProfile({ ...profile, fullName: value })}
      >
        <p className="text-gray-300 rounded-lg">{profile.fullName}</p>
      </EditableMenu>

      <div>
        <label className="text-[#C5A572] mb-2">Email</label>
        <p className="text-gray-300">{profile.email}</p>
      </div>

      <EditableMenu
        field="About"
        type="textarea"
        value={profile.about}
        onChangeValue={(value) => setProfile({ ...profile, about: value })}
      >
        <p className="text-gray-300 rounded-lg">{profile.about}</p>
      </EditableMenu>
    </div>
  );
};

export default ProfileInfo;
