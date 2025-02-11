const BookDescription = () => {
  return (
    <div className="bg-[#3D261C]/80 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-[#C5A572] mb-6">
        Book Description
      </h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 leading-relaxed">
          Follow the journey of a young apprentice as they discover their
          magical abilities and navigate the challenges of becoming a wizard.
          This enchanting tale combines adventure, friendship, and the power of
          self-discovery in a world where magic exists in unexpected places.
        </p>
        <p className="text-gray-400 leading-relaxed mt-4">
          Set in a richly detailed magical world, The Young Wizard explores
          themes of courage, friendship, and the responsibility that comes with
          great power. Perfect for fans of fantasy and coming-of-age stories.
        </p>
      </div>
    </div>
  );
};

export default BookDescription;
