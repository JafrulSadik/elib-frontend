"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef, HTMLAttributes } from "react";

type PasswordFieldProps = {
  label: string;
  icon: React.ElementType;
  error?: string;
  placeholder?: string;
  showPassword: boolean;
  toggleIcon?: boolean;
  onToggleShowPassword: () => void;
};

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      label,
      icon: Icon,
      error,
      placeholder,
      showPassword,
      onToggleShowPassword,
      toggleIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className="pt-2">
        <label className="block text-[#C5A572] mb-2">{label}</label>
        <div className="relative">
          <input
            ref={ref}
            {...(props as HTMLAttributes<HTMLInputElement>)}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={clsx(
              "w-full px-4 py-3 bg-[#3D261C] text-white rounded-lg focus:outline-none focus:ring-2",
              error
                ? "focus:ring-red-500 border border-red-500"
                : "focus:ring-[#C5A572]/50"
            )}
          />
          <Icon
            onClick={toggleIcon ? onToggleShowPassword : undefined}
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
          />
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm mt-2"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";
export default PasswordField;
