import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef, HTMLAttributes, TextareaHTMLAttributes } from "react";

type TextInputFieldProps = {
  label: string;
  icon?: React.ElementType;
  error?: string;
  type?: "text" | "textarea";
  placeholder?: string;
} & (
  | HTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const TextInputField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputFieldProps
>(({ label, icon: Icon, error, type = "text", placeholder, ...props }, ref) => (
  <div>
    <label className="block text-[#C5A572] mb-2">{label}</label>
    <div className="relative text-white">
      {type === "textarea" ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          placeholder={placeholder}
          rows={3}
          className={clsx(
            "w-full px-4 py-2 bg-bgSecondary rounded-lg focus:outline-none focus:ring-2",
            error
              ? "focus:ring-red-500 border border-red-500"
              : "focus:ring-[#C5A572]/50"
          )}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          {...(props as HTMLAttributes<HTMLInputElement>)}
          placeholder={placeholder}
          className={clsx(
            "w-full px-4 py-2  bg-bgSecondary rounded-lg focus:outline-none focus:ring-2",
            error
              ? "focus:ring-red-500 border border-red-500"
              : "focus:ring-[#C5A572]/50"
          )}
        />
      )}
      {Icon && <Icon className="absolute right-3 top-3.5 h-5 w-5 " />}
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
));

TextInputField.displayName = "TextInputField";
export default TextInputField;
