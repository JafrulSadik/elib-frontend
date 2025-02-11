import BookCard from "../common/BookCard";

const LatestBooks = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#C5A572]">Latest Books</h2>
        <button className="text-[#C5A572] hover:text-[#D4B684]">
          Show More
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <BookCard
            key={i}
            image={`https://images.unsplash.com/photo-${
              i === 1
                ? "1589829085413-56de8ae18c73"
                : i === 2
                ? "1544947950-fa07a98d237f"
                : i === 3
                ? "1512820790803-83ca734da794"
                : i === 4
                ? "1543002588-bfa74002ed7e"
                : "1589829085413-56de8ae18c73"
            }?auto=format&fit=crop&w=400`}
            title={
              [
                "Digital Age",
                "Cloud Atlas",
                "River's Edge",
                "Mountain Peak",
                "Ocean Deep",
              ][i - 1]
            }
            author={
              [
                "Lisa Chen",
                "Robert Black",
                "Anna White",
                "James Lee",
                "Maria Garcia",
              ][i - 1]
            }
            rating={4.7 + i * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;
