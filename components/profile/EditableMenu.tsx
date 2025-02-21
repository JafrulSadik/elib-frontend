import { Pencil } from "lucide-react";
import { FC, Fragment, useRef, useState } from "react";

type Props = {
  type: "text" | "textarea";
  value: string;
  field: string;
  children: React.ReactNode;
  onChangeValue: (value: string) => void;
};

const EditableMenu: FC<Props> = ({
  type,
  value,
  field,
  onChangeValue,
  children,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  return (
    <div>
      <label className="flex items-center text-[#C5A572] mb-2">
        {field}
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="ml-2"
        >
          <Pencil className="w-4 h-4 text-[#C5A572]" />
        </button>
      </label>
      {isEditing ? (
        type === "text" ? (
          <Fragment>
            <input
              type="text"
              value={value}
              ref={inputRef}
              onChange={(e) => onChangeValue(e.target.value)}
              className="w-full px-4 py-2 bg-bgPrimary/60  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]"
            />
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="mt-2 px-4 py-2 bg-[#C5A572]/60 text-white rounded-lg"
            >
              Save
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <textarea
              value={value}
              ref={inputRef}
              onChange={(e) => onChangeValue(e.target.value)}
              className="w-full px-4 py-2 bg-bgPrimary/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] h-32"
            />
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="mt-2 px-4 py-2 bg-[#C5A572]/60 text-white rounded-lg"
            >
              Save
            </button>
          </Fragment>
        )
      ) : (
        children
      )}
    </div>
  );
};

export default EditableMenu;
