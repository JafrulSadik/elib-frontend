import BookDescription from "@/components/book-details/BookDescription";
import BookHeader from "@/components/book-details/BookHeader";
import RelatedBooks from "@/components/book-details/RelatedBooks";
import ReviewSection from "@/components/book-details/ReviewSection";
import { auth } from "@/lib/auth/auth";

export default async function BookPage() {
  const session = await auth();

  return (
    <div className="relative  min-h-screen bg-gradient-to-b from-[#2B1810] to-[#1a0f0a]">
      <div className="container mx-auto px-4 py-12">
        <BookHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <BookDescription />
            <ReviewSection />
          </div>

          {/* Right Column - Related Books */}
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
}
