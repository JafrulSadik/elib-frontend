import Books from "./Books";
type Props = {
  queryString: string;
};

const BookContainer = ({ queryString }: Props) => {
  return (
    <div className="h-full bg-bgSecondary/50 rounded-md border border-textPrimary/30  lg:min-h-[800px]">
      <Books queryString={queryString} />
    </div>
  );
};

export default BookContainer;
