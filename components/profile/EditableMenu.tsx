import { Pencil } from "lucide-react";
import { FC } from "react";

type Props = {
  type: "text" | "textarea";
  value: string;
  field: string;
  isEditing: EditType;
  onEdit: (value: EditType) => void;
  children: React.ReactNode;
  onSave: (newValue: string) => void;
};

type EditType = {
  field: string;
  value: string;
};

const EditableMenu: FC<Props> = ({
  type,
  value,
  field,
  isEditing,
  onEdit,
  children,
  onSave,
}) => {
  const handleIsEditing = () => {
    onEdit({ field, value });
  };

  const handleSave = () => {
    onSave(isEditing.value);
    onEdit({ field: "", value: "" }); // Exit edit mode
  };

  return (
    <div>
      <label className="flex items-center text-[#C5A572] mb-2">
        {field}
        <button type="button" onClick={handleIsEditing} className="ml-2">
          <Pencil className="w-4 h-4 text-[#C5A572]" />
        </button>
      </label>

      {isEditing.field === field ? (
        <>
          {type === "text" ? (
            <input
              type="text"
              value={isEditing.value}
              autoFocus
              onChange={(e) => onEdit({ ...isEditing, value: e.target.value })}
              className="w-full px-4 py-2 bg-bgPrimary/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
            />
          ) : (
            <textarea
              value={isEditing.value}
              autoFocus
              onChange={(e) => onEdit({ ...isEditing, value: e.target.value })}
              className="w-full px-4 py-2 bg-bgPrimary/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] h-32"
            />
          )}

          <button
            type="button"
            onClick={handleSave}
            className="mt-2 px-4 py-2 bg-[#C5A572]/60 text-white rounded-lg"
          >
            Save
          </button>
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default EditableMenu;
