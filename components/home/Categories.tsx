import CategoryCard from "./CategoryCard";

export const bookCategories = [
  {
    id: 1,
    name: "Fiction",
    cover:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Science",
    cover:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "History",
    cover:
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fantasy",
    cover:
      "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Self-Help",
    cover:
      "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Biographies",
    cover:
      "https://images.unsplash.com/photo-1628988253393-67a6293ea2f1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Romance",
    cover:
      "https://images.unsplash.com/photo-1621827979802-6d778e161b28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Horror",
    cover:
      "https://images.unsplash.com/photo-1652571305415-03416a741883?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1616687551818-a9218cddd2dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Technology",
    cover:
      "https://images.unsplash.com/photo-1591224792512-8a4547a55f2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Categories = () => {
  return (
    <section className="my-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-[#C5A572] mb-8">
          Choose Your Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {bookCategories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              cover={category.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
