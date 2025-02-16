import {
  BookMarked,
  BookOpen,
  Download,
  Heart,
  Share2,
  Star,
} from "lucide-react";

const BookHeader = () => {
  return (
    <div className="bg-[#3D261C]/80 backdrop-blur-lg rounded-2xl p-12 mb-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Book Cover */}
        <div className="lg:w-1/3">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600"
              alt="Book Cover"
              className="w-full rounded-lg shadow-2xl transform transition duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <button className="bg-[#C5A572] text-[#2B1810] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B684] transition duration-300">
                Preview Book
              </button>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#C5A572]/20 text-[#C5A572] rounded-full text-sm">
              Fantasy
            </span>
            <span className="px-3 py-1 bg-[#C5A572]/20 text-[#C5A572] rounded-full text-sm">
              Adventure
            </span>
          </div>

          <h1 className="text-4xl font-bold text-[#C5A572] mb-2">
            The Young Wizard
          </h1>
          <p className="text-xl text-gray-400 mb-6">by Aaron Ling</p>

          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-2xl text-white ml-2 font-semibold">
                4.8
              </span>
              <span className="text-gray-400 ml-2">(128 reviews)</span>
            </div>
            <div className="text-gray-400">
              <BookMarked className="w-5 h-5 inline mr-2" />
              15,234 reads
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2B1810] rounded-xl p-6">
              <h3 className="text-[#C5A572] font-semibold mb-2">
                Book Details
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Pages: 384</li>
                <li>Language: English</li>
                <li>Publisher: Magic Press</li>
                <li>Publication Date: March 2025</li>
              </ul>
            </div>
            <div className="bg-[#2B1810] rounded-xl p-6">
              <h3 className="text-[#C5A572] font-semibold mb-2">
                Available Formats
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>eBook (PDF, EPUB)</li>
                <li>Audiobook (MP3)</li>
                <li>Hardcover</li>
                <li>Paperback</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="flex-1 px-6 py-3 bg-[#C5A572] text-[#2B1810] rounded-lg hover:bg-[#D4B684] transition duration-300 flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Read Now</span>
            </button>
            <button className="flex-1 px-6 py-3 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572] hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download</span>
            </button>
            <button className="px-6 py-3 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572] hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572] hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHeader;
