import BookCard from "./BookCard";

type Props = {
  loading: boolean;
};

const BookContainer = (props: Props) => {
  const { loading } = props;
  return (
    <div className="flex justify-center items-center bg-bgSecondary/50 rounded-md border border-textPrimary/30  lg:min-h-[840px]">
      {
        // <div className="h-full flex justify-center items-center">
        //   <p>No books found!</p>
        // </div>
      }
      {
        <div className="h-full w-full p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array(50)
            .fill("")
            .map((_, index) => (
              <BookCard
                key={index}
                image={`https://picsum.photos/200/300?random=${index}`}
                title={`Book Title ${index + 1}`}
                author={`Author ${index + 1}`}
                rating={Math.random() * 5}
                downloads={Math.floor(Math.random() * 10000)}
                format="PDF"
              />
            ))}
        </div>
      }
    </div>
  );
};

export default BookContainer;
