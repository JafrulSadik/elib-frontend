import { getLatestBooks } from "@/lib/fetchData";
import NewReleaseError from "./NewReleaseError";
import NewReleaseSlider from "./NewReleaseSlider";
import SeeAllButton from "./SeeAllButton";

const NewReleases = async () => {
  const { data: latestBooks, message, code } = await getLatestBooks();

  if (!latestBooks?.length) {
    return (
      <NewReleaseError
        message={"No new releases available!"}
        textColor="text-textPrimary"
      />
    );
  }

  if (code !== 200) {
    return <NewReleaseError message={message} textColor="text-textPrimary" />;
  }

  return (
    <section className="py-6 lg:py-8">
      <div className="container w-[90%] md:w-full space-y-4 md:space-y-8">
        <NewReleaseSlider books={latestBooks} />
        <div className="flex justify-center pt-2 mt-5 md:mt-0">
          <SeeAllButton />
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
