import {
  BookOpen,
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
    <footer className="bg-gradient-to-b from-[#2B1810] to-[#1a0f0a] pt-16">
      <div className="container mx-auto px-6 py-6">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 border-b border-t border-[#C5A572]/10 py-12">
          <div className="flex items-center mb-8 lg:mb-0">
            <BookOpen className="w-10 h-10 text-[#C5A572]" />
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-[#C5A572]">E-LIBRARY</h3>
              <p className="text-gray-400">Your Gateway to Knowledge</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="text-[#C5A572] font-semibold mb-4 text-center lg:text-left">
              Subscribe to Our Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#3D261C] text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50"
              />
              <button className="px-6 py-3 bg-[#C5A572] text-[#2B1810] rounded-r-lg hover:bg-[#D4B684] transition duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-[#C5A572] font-semibold mb-6 text-lg">
              About Us
            </h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover millions of eBooks, audiobooks, and more at your
              fingertips. Join our community of book lovers and explore endless
              possibilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3D261C] flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3D261C] flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3D261C] flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3D261C] flex items-center justify-center text-[#C5A572] hover:bg-[#C5A572] hover:text-[#2B1810] transition duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C5A572] font-semibold mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Featured Books",
                "Latest Releases",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#C5A572] transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#C5A572] rounded-full mr-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#C5A572] font-semibold mb-6 text-lg">
              Support
            </h4>
            <ul className="space-y-4">
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
                    className="text-gray-400 hover:text-[#C5A572] transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#C5A572] rounded-full mr-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C5A572] font-semibold mb-6 text-lg">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#C5A572] mt-1 mr-3" />
                <p className="text-gray-400">
                  123 Library Street, Book City, BC 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#C5A572] mr-3" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#C5A572] mr-3" />
                <p className="text-gray-400">support@elibrary.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C5A572]/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} E-Library. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-[#C5A572] text-sm transition duration-300"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-[#C5A572] text-sm transition duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-[#C5A572] text-sm transition duration-300"
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
