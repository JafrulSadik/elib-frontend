"use client";

import ReviewHeader from "./ReviewHeader";
import Reviews from "./Reviews";

type Props = {
  onShowReviewModal: (value: boolean) => void;
};

const ReviewSection = () => {
  
  return (
    <div className="bg-[#3D261C]/80  md:rounded-xl p-8">
      <ReviewHeader />
      <div className="space-y-4 md:space-y-6">
        {[1, 2, 3].map((i) => (
          <Reviews key={i} i={i} />
        ))}
        <div className="flex justify-center">
          <button className="px-3 rounded-md text-textPrimary hover:underline">
            Show more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
