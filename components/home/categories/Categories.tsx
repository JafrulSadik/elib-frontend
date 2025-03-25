import ErrorComponent from "@/components/common/ErrorComponent";
import { getGenresWithBook } from "@/lib/fetchData";
import CategoryCard from "./CategoryCard";

const Categories = async () => {
  const { data: categories = [], message, code } = await getGenresWithBook();

  return (
    <section className="py-10 md:py-16">
      <div className="container w-[90%] md:w-full">
        <h2 className="text-xl md:text-3xl text-center font-bold text-[#C5A572] mb-10">
          Choose Your Category
        </h2>
        {categories?.length > 0 ? (
          <div className="grid gap-5 md:gap-10 grid-cols-[repeat(auto-fit,minmax(130px,1fr))] md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category._id} genre={category} />
            ))}
          </div>
        ) : (
          <ErrorComponent
            message="No categories available !"
            textColor="text-textPrimary"
          />
        )}
      </div>
    </section>
  );
};

export default Categories;
