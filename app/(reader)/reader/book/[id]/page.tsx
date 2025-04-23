import BookReaderWrapper from "@/components/library/BookReaderWrapper";
import { Suspense } from "react";

const ReaderPage = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookReaderWrapper bookId={params?.id} />
    </Suspense>
  );
};

export default ReaderPage;
