"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const initialAuthors = [
  { _id: "1", name: "Author One" },
  { _id: "2", name: "Author Two" },
  { _id: "3", name: "Author Three" },
  { _id: "4", name: "Author Four" },
  { _id: "5", name: "Author Five" },
];

const TopWriters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [authors, setAuthors] = useState(initialAuthors);

  const authorsId = searchParams.get("authors")?.split(",");
  const handleAuthorSelect = (authorId: string) => {
    const params = new URLSearchParams(searchParams);

    const data = params.get("authors");
    let newAuthors = "";

    if (data) {
      const splited = data.split(",");
      if (splited.includes(authorId)) {
        const filteredAuthor = splited.filter((item) => item !== authorId);
        newAuthors = filteredAuthor.join(",");
      } else {
        const selectedAuthor = [...splited, authorId];
        newAuthors = selectedAuthor.join(",");
      }
    } else {
      newAuthors = authorId;
    }

    if (newAuthors) {
      params.set("authors", newAuthors);
    } else {
      params.delete("authors");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="text-sm h-[180px]">
      {authors &&
        authors.map((author) => {
          const selected = authorsId?.includes(author._id);
          return (
            <div key={author._id}>
              <div className="flex items-center px-3 gap-2 py-1">
                <input
                  checked={selected || false}
                  onChange={() => handleAuthorSelect(author._id)}
                  type="checkbox"
                  className="accent-bgSecondary"
                />
                <p className="max-w-40 truncate">{author.name}</p>
              </div>
              <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
            </div>
          );
        })}
    </div>
  );
};

export default TopWriters;
