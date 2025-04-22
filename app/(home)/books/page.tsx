import BooksSearchPage from "@/components/books/BooksSearchPage";
import { buildQueryString } from "@/lib/buildQueryString";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const BooksPage = async ({ searchParams }: Props) => {
  const queryString = buildQueryString(searchParams);
  return <BooksSearchPage queryString={queryString} />;
};

export default BooksPage;
