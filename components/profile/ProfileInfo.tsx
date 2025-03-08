"use client";
import { User } from "@/types/User";
import { useState } from "react";
import EditableMenu from "./EditableMenu";

type EditType = {
  field: string;
  value: string;
};

type Props = {
  user?: User;
};

const ProfileInfo = ({ user }: Props) => {
  const [isEditing, setIsEditing] = useState<EditType>({
    field: "",
    value: "",
  });
  const [profile, setProfile] = useState({
    name: user?.name,
    email: user?.email,
    about: user?.about,
  });

  const handleSave = (key: keyof typeof profile, newValue: string) => {
    setProfile((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <div className="space-y-6">
      <EditableMenu
        field="Full Name"
        type="text"
        value={profile?.name || ""}
        isEditing={isEditing}
        onEdit={setIsEditing}
        onSave={(newValue) => handleSave("name", newValue)}
      >
        <p className="text-gray-300 rounded-lg">{profile?.name}</p>
      </EditableMenu>

      <div>
        <label className="text-[#C5A572] mb-2">Email</label>
        <p className="text-gray-300">{profile?.email}</p>
      </div>

      <EditableMenu
        field="About"
        type="textarea"
        value={profile?.about || ""}
        isEditing={isEditing}
        onEdit={setIsEditing}
        onSave={(newValue) => handleSave("about", newValue)}
      >
        <p className="text-gray-300 rounded-lg">{profile?.about}</p>
      </EditableMenu>
    </div>
  );
};

export default ProfileInfo;
