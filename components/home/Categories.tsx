const Categories = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-[#C5A572] mb-8">
        Choose Your Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          "Non Fiction",
          "History",
          "War",
          "Educational",
          "Fantasy",
          "Poetry",
          "Drama",
          "Religion",
          "Romantic",
          "Fiction",
        ].map((category) => (
          <button
            key={category}
            className="px-6 py-3 bg-[#3D261C] text-[#C5A572] rounded-lg hover:bg-[#4D362C] transition duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
