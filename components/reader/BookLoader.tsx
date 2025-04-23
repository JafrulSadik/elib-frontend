import { Loader } from "lucide-react";

type Props = {
  width: number;
};

const BookLoader = (props: Props) => {
  const { width } = props;
  return (
    <div className={`flex justify-center items-center `}>
      {width ? (
        <div
          className={`flex justify-center items-center rounded-md animate-pulse w-[${width}px] h-[100vh]`}
        >
          <Loader className="animate-spin size-5 text-textPrimary/30" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookLoader;
