import { ChevronRight, Star } from "lucide-react";

const relatedBooks = [
  {
    title: "The Art of Fiction",
    author: "David Lodge",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300",
    rating: 4.7,
  },
  {
    title: "Writing Craft",
    author: "Stephen King",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300",
    rating: 4.8,
  },
  {
    title: "Story Structure",
    author: "Robert McKee",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300",
    rating: 4.6,
  },
];

const RelatedBooks = () => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-[#3D261C]/80 backdrop-blur-lg rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#C5A572]">Related Books</h2>
          <button className="text-[#C5A572] hover:text-[#D4B684] transition duration-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {relatedBooks.map((book, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-20 h-28 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-[#C5A572] font-semibold mb-1">
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-400 text-sm ml-1">
                    {book.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBooks;
