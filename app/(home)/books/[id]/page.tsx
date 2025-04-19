import BookDescription from "@/components/book-details/BookDescription";
import BookHeader from "@/components/book-details/BookHeader";
import RelatedBooks from "@/components/book-details/RelatedBooks";
import ReviewSection from "@/components/book-details/ReviewSection";

export default async function BookPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="relative  min-h-screen bg-gradient-to-b from-[#2B1810] to-[#1a0f0a]">
      <div className="container mx-auto md:px-4 md:py-12">
        <BookHeader bookId={id} />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8">
          <div className="lg:col-span-2 md:space-y-8">
            <BookDescription bookId={id} />
            <ReviewSection />
          </div>
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
}
