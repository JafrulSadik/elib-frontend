import { motion } from "framer-motion";
import { forwardRef } from "react";

type FileInputFieldProps = {
  label: string;
  accept: string;
  error?: string;
  placeholder?: string;
  id: string;
  fileName?: string;
};

const FileInputField = forwardRef<HTMLInputElement, FileInputFieldProps>(
  ({ label, id, error, placeholder, fileName, accept, ...props }, ref) => (
    <div className="pt-2">
      <label className="block text-[#C5A572] mb-2">{label}</label>
      <div>
        <div className="justify-center rounded-lg text-center bg-bgPrimary">
          <input
            ref={ref}
            type="file"
            accept={accept}
            className="w-full p-3 hidden"
            id={id}
            {...props}
            max={1}
          />
          <label
            htmlFor={id}
            className="flex cursor-pointer items-center space-x-3 text-sm"
          >
            <span className="px-3 py-2 rounded-md bg-bgSecondary text-textPrimary">
              {placeholder}
            </span>
            <p className="text-gray-400 truncate">
              {!fileName ? "No file choosen" : fileName}
            </p>
          </label>
        </div>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-red-500 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
);

FileInputField.displayName = "FileInputField";

export default FileInputField;
