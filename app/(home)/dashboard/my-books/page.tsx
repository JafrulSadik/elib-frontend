import BooksDataTable from "@/components/my-books/BooksDataTable";

const MyBooksPage = () => {
  return (
    <div className="p-10">
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-[#C5A572]">My Books</h1>
      </header>

      <main className="flex flex-col">
        <BooksDataTable />
      </main>
    </div>
  );
};

export default MyBooksPage;
