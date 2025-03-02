import Link from "next/link";

const DashboardPage = () => {
  return (
    <main className="w-full p-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold text-[#DEB887]">Add a Book</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-[#DEB887]">
              Book Title
            </label>
            <input
              id="title"
              placeholder="Enter book title"
              className="bg-[#4a372a] border-[#4a372a] text-[#DEB887] placeholder:text-[#C4A484]/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="genre" className="text-[#DEB887]">
              Genre
            </label>
            <select>
              <option className="">
                <option
                  value="fiction"
                  className="bg-[#3B2A1F] border-[#4a372a]"
                >
                  Fiction
                </option>
                <option
                  value="non-fiction"
                  className="bg-[#3B2A1F] border-[#4a372a]"
                >
                  Non-Fiction
                </option>
                <option
                  value="science"
                  className="bg-[#3B2A1F] border-[#4a372a]"
                >
                  Science
                </option>
                <option
                  value="technology"
                  className="bg-[#3B2A1F] border-[#4a372a]"
                >
                  Technology
                </option>
                <option
                  value="history"
                  className="bg-[#3B2A1F] border-[#4a372a]"
                >
                  History
                </option>
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-[#DEB887]">
              Description
            </label>
            <input
              id="description"
              type="textarea"
              placeholder="Enter book description"
              className="min-h-[120px] bg-[#4a372a] border-[#4a372a] text-[#DEB887] placeholder:text-[#C4A484]/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cover" className="text-[#DEB887]">
              Cover Image
            </label>
            <div className="flex items-center gap-4">
              <Link
                href={`/dashboard/add-book`}
                className="bg-[#4a372a] border-[#4a372a] text-[#DEB887] hover:bg-[#5a473a] hover:text-[#DEB887]"
              >
                Choose File
              </Link>
              <span className="text-[#C4A484]">No file chosen</span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="file" className="text-[#DEB887]">
              Book File
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                className="bg-[#4a372a] border-[#4a372a] text-[#DEB887] hover:bg-[#5a473a] hover:text-[#DEB887]"
              />
              <span className="text-[#C4A484]">No file chosen</span>
            </div>
          </div>

          <hr className="my-6 bg-[#4a372a]" />

          <button className="w-full bg-[#C4A484] text-[#3B2A1F] hover:bg-[#DEB887]">
            Add Book
          </button>
        </form>
      </div>
    </main>
  );
};

export default DashboardPage;
