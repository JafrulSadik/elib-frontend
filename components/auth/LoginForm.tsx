"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader, Mail } from "lucide-react";
import Error from "next/error";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

// validationSchema.ts
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// Infer TypeScript type from schema
export type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData: LoginFormData) => {
    setLoading(true);
    setError("root.random", { message: "" });

    try {
      const response: SignInResponse | undefined = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (response?.error) {
        const error =
          response.code === "credentials"
            ? "Invalid email or password"
            : "Something went wrong.";
        setError("root.random", { message: error });
      } else {
        router.push("/");
      }
    } catch (err) {
      const error = err as Error;
      setError("root.random", { message: "Something went wrong." });
    }
    setLoading(false);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Email Address"
        placeholder="Enter your email"
        icon={Mail}
        error={errors?.email?.message}
        {...register("email")}
      />

      <PasswordField
        label="Password"
        icon={showPassword ? Eye : EyeOff}
        error={errors?.password?.message}
        placeholder="Create a password"
        showPassword={showPassword}
        toggleIcon={true}
        onToggleShowPassword={handleToggleShowPassword}
        {...register("password")}
      />

      {errors?.root?.random && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-red-500 text-sm"
        >
          {errors.root.random.message}
        </motion.p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex cursor-pointer gap-2 items-center justify-center  bg-[#C5A572] text-[#2B1810] py-3 rounded-lg hover:bg-[#D4B684] transition duration-300 font-semibold ${
            loading && "opacity-70"
          }`}
        >
          {loading && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Loader className="size-5 animate-spin" />
            </motion.span>
          )}{" "}
          Sign in
        </button>
      </div>

      <p className="text-center text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#C5A572] hover:text-[#D4B684]">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
