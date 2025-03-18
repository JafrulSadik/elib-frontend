import Link from "next/link";
import CompactBookCard from "./CompactBookCard";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
];

const MostRatedBooks = () => {
  return (
    <section className="my-12 bg-textPrimary/5 py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6 text-textPrimary">
          <h2 className="text-2xl font-bold">Top Rated Books</h2>
          <Link href="/books">Show More</Link>
        </div>
        <div className="grid mt-10 place-items-center grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
          {books.map((book) => (
            <CompactBookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostRatedBooks;
