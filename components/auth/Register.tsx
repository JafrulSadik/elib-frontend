import Image from "next/image";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <div className="h-screen overflow-hidden bg-bgPrimary flex flex-col">
      <div className="flex flex-grow">
        {/* Left Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-bgSecondary p-12 items-center justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-[#C5A572] mb-6">
              Join Our Library
            </h1>
            <h2 className="text-2xl text-[#C5A572] mb-4">
              Start Your Reading Adventure
            </h2>
            <p className="text-gray-400 text-lg">
              Create an account to unlock a world of books. Save your favorites,
              track your reading progress, and join a community of book lovers.
              Your next great read awaits!
            </p>
            <Image
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600"
              alt="Library"
              height={300}
              width={600}
              className="mt-8 h-56 rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 h-screen flex justify-center">
          <div className="w-full flex justify-center overflow-y-auto scroll-smooth">
            <div className="max-w-md w-full flex flex-col my-16 mx-5">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-textPrimary">
                  Create Account
                </h2>
                <p className="text-gray-400 mt-2">
                  Join our community of readers
                </p>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
