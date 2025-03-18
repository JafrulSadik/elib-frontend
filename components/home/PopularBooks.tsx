import PopularBookCard from "./PopularBookCard";

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
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 5,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 6,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },

  {
    id: 7,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 8,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 9,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 10,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
];

const PopularBooks = async () => {
  // const response = (await getPopularBooks()) as ApiResponse<
  //   Book[],
  //   PaginationType
  // >;

  // const books = response.code === 200 ? response?.data ?? [] : [];
  return (
    <section className="my-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-bold text-[#C5A572]">Popular Books</h2>
          <button className="text-[#C5A572] hover:text-[#D4B684]">
            Show More
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 my-10 lg:grid-cols-5 lg:grid-rows-1 gap-7">
          {books &&
            books?.map((book, i) => (
              <PopularBookCard
                key={book?.id}
                id={book.id}
                cover={book?.cover}
                title={book?.title}
                author={book?.author}
                price={"500"}
                rating={4.6 + i * 0.1}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
