"use client";

type Props = {
  handleSearch: (value: string) => void;
};

const BookSearch = (props: Props) => {
  const { handleSearch } = props;

  return (
    <div className="my-4 w-full flex">
      <input
        className="text-xs bg-bgSecondary md:text-sm px-2 md:px-4 py-2 rounded-md w-[30%] md:w-[40%] border border-bgSecondary focus:ring-textPrimary/50 focus:ring-2 outline-none"
        type="text"
        placeholder="Search"
        onChange={({ target }) => handleSearch(target.value)}
      />
    </div>
  );
};

export default BookSearch;
