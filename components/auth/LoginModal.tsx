"use client";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";

type Props = {
  onShowLogin: (value: boolean) => void;
  onShowRegister: (value: boolean) => void;
};

const LoginModal = ({ onShowLogin, onShowRegister }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#3D261C] rounded-xl p-8 max-w-md w-full relative">
        <button
          onClick={() => onShowLogin(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-[#C5A572] mb-6">Welcome Back</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-[#C5A572] mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-2 bg-[#2B1810] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
                placeholder="Enter your email"
              />
              <Mail className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-[#C5A572] mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 bg-[#2B1810] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded bg-[#2B1810] border-[#C5A572] text-[#C5A572]"
              />
              <span className="ml-2 text-[#C5A572]">Remember me</span>
            </label>
            <a href="#" className="text-[#C5A572] hover:text-[#D4B684]">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C5A572] text-[#2B1810] py-2 rounded-lg hover:bg-[#D4B684] transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => {
                onShowLogin(false);
                onShowRegister(true);
              }}
              className="text-[#C5A572] hover:text-[#D4B684]"
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
