/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { errorToast, successToast } from "@/lib/notify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Field from "./Field";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

type RegistrationResponseType = {
  accessToken: string;
};

export const registerSchema = z
  .object({
    fname: z
      .string()
      .min(1, { message: "First name is required" })
      .min(3, { message: "First name should be at least 3 characters." })
      .max(20, { message: "Name can't max 20 characters long." }),
    lname: z
      .string()
      .max(20, { message: "Name can't be max 20 characters long." })
      .optional(),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
    agree: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password do not match",
    path: ["confirmPassword"], // Shows error under the confirmPassword field
  });

// Infer TypeScript type from schema
export type RegisterFormData = z.infer<typeof registerSchema>;

type FormData = {
  fname: string;
  lname?: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData: FormData) => {
    setLoading(true);

    if (formData.agree === false) {
      setLoading(false);
      return setError("agree", {
        message: "Terms and conditions must be accepted for the future use.",
      });
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData?.fname + " " + formData?.lname,
            email: formData?.email,
            password: formData?.password,
          }),
        }
      );

      console.log(response);

      if (!response.ok) {
        setError("root.random", { message: "Something went wrong." });
        errorToast("Failed to register!");
      } else {
        successToast("Registration successfull!");
        router.push("/login");
      }
    } catch (err) {
      const error = err as Error;
      setError("root.random", { message: "Something went wrong." });
    }
    setLoading(false);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          placeholder="John"
          icon={User}
          error={errors?.fname?.message}
          {...register("fname")}
        />

        <InputField
          label="Last Name"
          placeholder="Doe"
          icon={User}
          error={errors?.lname?.message}
          {...register("lname")}
        />
      </div>

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

      <PasswordField
        label="Confirm Password"
        icon={Lock}
        error={errors?.confirmPassword?.message}
        placeholder="Confirm your password"
        showPassword={showPassword}
        onToggleShowPassword={handleToggleShowPassword}
        {...register("confirmPassword")}
      />

      <Field error={errors?.agree?.message}>
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("agree")}
            className={`rounded bg-[#3D261C]  text-[#C5A572] accent-[#3D261C] ${
              errors.agree
                ? "focus:ring-red-500 border border-red-500"
                : "focus:ring-[#C5A572]/50 border-[#C5A572]"
            }`}
          />
          <span className="ml-2 text-[#C5A572]">
            I agree to the{" "}
            <Link href="/terms" className="underline hover:text-[#D4B684]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-[#D4B684]">
              Privacy Policy
            </Link>
          </span>
        </div>
      </Field>

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex cursor-pointer gap-2 items-center justify-center bg-[#C5A572] text-[#2B1810] py-3 rounded-lg hover:bg-[#D4B684] transition duration-300 font-semibold ${
          loading && "opacity-70"
        }`}
      >
        {loading && <Loader className="size-5 animate-spin" />} Create Account
      </button>

      <p className="text-center text-gray-400 pb-16">
        Already have an account?{" "}
        <Link href="/login" className="text-[#C5A572] hover:text-[#D4B684]">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
