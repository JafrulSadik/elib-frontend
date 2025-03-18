import Image from "next/image";

const CategoryCard = ({ title, cover }: { title: string; cover: string }) => {
  return (
    <div className="relative shadow-md group w-full min-h-[120px] max-w-[260px]  aspect-[1/1] sm:max-w-[280px] md:max-w-[300px] rounded-md bg-bgSecondary/60  px-2 pt-2 group overflow-hidden">
      <h3 className="text-center font-semibold py-6 text-textPrimary">
        {title}
      </h3>
      <div className="flex justify-center w-full ">
        <Image
          src={cover}
          alt={title}
          height={600}
          width={400}
          className="group-hover:scale-110 shadow-black shadow-sm  transition duration-300 rounded-t-md object-cover w-3/5"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
