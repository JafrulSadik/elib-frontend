"use client";

import { ApiResponse } from "@/types/ApiResponse";
import { User } from "@/types/User";
import { motion } from "framer-motion";
import { Loader, Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

type EditType = {
  field: string;
  value: string;
} | null;

type Props = {
  type: "text" | "textarea";
  value: string;
  field: string;
  label: string;
  edit: EditType;
  onEdit: (editType: EditType) => void;
  onUpdate: () => void;
  children: React.ReactNode;
};

const EditableMenu = ({
  type,
  value,
  field,
  label,
  edit,
  onEdit,
  onUpdate,
  children,
}: Props) => {
  const { data: session } = useSession();

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEdit = () => {
    onEdit({ field, value });
    setError("");
  };

  const validateInput = (inputValue: string): boolean => {
    if (field === "Full Name") {
      if (inputValue.length < 3)
        return setError("Name must be at least 3 characters long"), false;
      if (inputValue.length > 20)
        return setError("Name can't be more than 20 characters long"), false;
      if (!/^[a-zA-Z1-9\s]+$/.test(inputValue))
        return setError("Name can't contain special characters."), false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateInput(edit?.value || "")) return;
    setLoading(true);
    setError("");

    const updatedData = {
      field,
      value: edit?.value.trim() || "",
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify(updatedData),
      });

      const data = (await res.json()) as ApiResponse<User>;

      if (!res.ok) throw new Error(data.message || "Failed to update profile");

      onUpdate();
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }

    setLoading(false);
  };

  const handleCancel = () => {
    onEdit({ field: "", value: "" });
    setError("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onEdit({ field, value: e.target.value });
    setError("");
  };

  return (
    <div>
      <label className="flex items-center text-[#C5A572] mb-2">
        {label}
        <button type="button" onClick={handleEdit} className="ml-2">
          <Pencil className="w-4 h-4 text-[#C5A572]" />
        </button>
      </label>

      {edit && edit.field === field ? (
        <>
          {type === "text" ? (
            <input
              type="text"
              value={edit.value}
              autoFocus
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-bgSecondary/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
            />
          ) : (
            <textarea
              value={edit.value}
              autoFocus
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-bgSecondary/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] h-32"
            />
          )}

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm mt-2"
            >
              {error}
            </motion.p>
          )}

          <div className="flex gap-2 text-sm">
            <button
              type="button"
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-1 mt-2 px-4 py-2 bg-[#C5A572]/60 text-white rounded-lg"
            >
              {loading && <Loader className="size-4 animate-spin" />}
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="mt-2 px-4 py-2 bg-red-500/60 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default EditableMenu;
