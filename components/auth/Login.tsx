"use client";
import Image from "next/image";
import LoginForm from "./LoginForm";
// import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen bg-[#2B1810] flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#3D261C] p-12 items-center justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-[#C5A572] mb-6">
            Sign in Now
          </h1>
          <h2 className="text-2xl text-[#C5A572] mb-4">
            Boost Your Reading Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Logging in unlocks your personal library tracker, letting you save
            favorites and track your reading progress. Whether you&apos;re
            exploring new genres or revisiting classics, there&apos;s always
            something new to discover.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600"
            alt="Books"
            width={600}
            height={300}
            className="mt-8 rounded-lg shadow-xl h-56 object-cover w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#C5A572]">Welcome Back</h2>
            <p className="text-gray-400 mt-2">Please sign in to your account</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};
