import { getTopWriters } from "@/lib/fetchData";
import TopWriters from "./TopWriters";

const TopWritersWrapper = async () => {
  const { data: authors, message, code } = await getTopWriters();

  return <TopWriters authors={authors || []} />;
};

export default TopWritersWrapper;
