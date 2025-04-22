import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 bg-gradient-to-b from-[#2B1810] to-[#1a0f0a]">
      <div className="container w-[90%] md:w-full">
        {/* Top Section with Logo and Newsletter */}
        {/* <div className="flex flex-col lg:flex-row justify-between md:items-center mb-12  md:py-12">
          <div className="flex items-center mb-4 md:mb-8 lg:mb-0">
            <BookOpen className="size-8 md:size-10 text-textPrimary" />
            <div className="ml-2 md:ml-4">
              <h3 className="text-lg md:text-2xl font-bold text-textPrimary">
                E-LIBRARY
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Your Gateway to Knowledge
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="text-textPrimary font-semibold my-2 md:mb-4 md:text-center lg:text-left text-sm md:text-base">
              Subscribe to Our Newsletter
            </h4>
            <div className="flex text-sm md:text-base">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 py-2 md:px-4 md:py-3 bg-[#3D261C] text-white rounded-l-md md:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
              />
              <button className="text-xs md:text-base px-3 md:px-6 md:py-3 bg-[#C5A572] text-[#2B1810]  rounded-r-md md:rounded-r-lg hover:bg-[#D4B684] transition duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-12">
          {/* About Section */}
          <div className="text-sm md:text-base">
            <h4 className="text-textPrimary font-semibold mb-2 md:mb-6 text-base md:text-lg">
              About Us
            </h4>
            <p className="text-xs md:text-base text-pretty text-gray-400 mb-2 md:mb-6 leading-relaxed">
              Discover millions of eBooks, audiobooks, and more at your
              fingertips. Join our community of book lovers and explore endless
              possibilities.
            </p>
            <div className="flex space-x-2 md:space-x-4">
              <Link
                href="#"
                className="size-7 md:size-10 rounded-full bg-[#3D261C] flex items-center justify-center text-textPrimary hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Facebook className="size-3 md:size-5" />
              </Link>
              <Link
                href="#"
                className="size-7 md:size-10 rounded-full bg-[#3D261C] flex items-center justify-center text-textPrimary hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Twitter className="size-3 md:size-5" />
              </Link>
              <Link
                href="#"
                className="size-7 md:size-10 rounded-full bg-[#3D261C] flex items-center justify-center text-textPrimary hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Instagram className="size-3 md:size-5" />
              </Link>
              <Link
                href="#"
                className="size-7 md:size-10 rounded-full bg-[#3D261C] flex items-center justify-center text-textPrimary hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Linkedin className="size-3 md:size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=" text-textPrimary font-semibold mb-2 md:mb-6 text-base md:text-lg">
              Quick Links
            </h4>
            <ul className="text-sm md:text-base space-y-2 md:space-y-4 list-none">
              {[
                "Home",
                "About Us",
                "Featured Books",
                "Latest Releases",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="">
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-textPrimary transition duration-300 flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-2 md:mb-6 text-base md:text-lg">
              Support
            </h4>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
              {[
                "FAQ",
                "Help Center",
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-textPrimary transition duration-300 flex items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-2 md:mb-6 text-base md:text-lg">
              Contact Us
            </h4>
            <div className="space-y-2 md:space-y-4 text-sm md:text-base">
              <div className="flex items-start">
                <MapPin className="size-4 md:size-5 text-textPrimary mt-1 mr-3" />
                <p className="text-gray-400">
                  123 Library Street, Book City, BC 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="size-4 md:size-5 text-textPrimary mr-3" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="size-4 md:size-5 text-textPrimary mr-3" />
                <p className="text-gray-400">support@elibrary.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C5A572]/10 py-6 text-sm md:text-base">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} E-Library. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-textPrimary text-sm transition duration-300"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-textPrimary text-sm transition duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-textPrimary text-sm transition duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
