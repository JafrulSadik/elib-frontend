"use client";
import { useState } from "react";
import EditableMenu from "./EditableMenu";

type EditType = {
  field: string;
  value: string;
};

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState<EditType>({
    field: "",
    value: "",
  });
  const [profile, setProfile] = useState({
    fullName: "Prity Rahman",
    email: "misuk@gmail.com",
    about:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  });

  const handleSave = (key: keyof typeof profile, newValue: string) => {
    setProfile((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <div className="space-y-6">
      <EditableMenu
        field="Full Name"
        type="text"
        value={profile.fullName}
        isEditing={isEditing}
        onEdit={setIsEditing}
        onSave={(newValue) => handleSave("fullName", newValue)}
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
        isEditing={isEditing}
        onEdit={setIsEditing}
        onSave={(newValue) => handleSave("about", newValue)}
      >
        <p className="text-gray-300 rounded-lg">{profile.about}</p>
      </EditableMenu>
    </div>
  );
};

export default ProfileInfo;
