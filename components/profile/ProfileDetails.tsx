"use client";
import { successToast } from "@/lib/notify";
import { useSession } from "next-auth/react";
import { useState } from "react";
import EditableMenu from "./EditableMenu";

type EditType = {
  field: string;
  value: string;
} | null;

const ProfileDetails = () => {
  const { data: session, update } = useSession();
  const profile = session?.user;

  const [edit, setEdit] = useState<EditType>(null);

  const handleUpdate = async () => {
    const field = edit?.field as string;
    await update({
      ...session,
      user: {
        ...session?.user,
        [field]: edit?.value,
      },
    });
    setEdit(null);
    successToast("Profile updated successfully.");
  };

  return (
    <div className="space-y-6">
      <EditableMenu
        label="Full Name"
        field="name"
        type="text"
        value={profile?.name || ""}
        edit={edit}
        onEdit={setEdit}
        onUpdate={handleUpdate}
      >
        <p className="text-gray-300 rounded-lg">{profile?.name}</p>
      </EditableMenu>

      <div>
        <label className="text-[#C5A572] mb-2">Email</label>
        <p className="text-gray-300">{profile?.email}</p>
      </div>

      <EditableMenu
        field="about"
        label="About"
        type="textarea"
        value={profile?.about || ""}
        edit={edit}
        onEdit={setEdit}
        onUpdate={handleUpdate}
      >
        <p className="text-gray-300 rounded-lg">{profile?.about}</p>
      </EditableMenu>
    </div>
  );
};

export default ProfileDetails;
