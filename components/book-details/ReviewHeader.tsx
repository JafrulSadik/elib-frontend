"use client";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import ReviewModal from "./ReviewModal";

const ReviewHeader = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#C5A572]">Reader Reviews</h2>
        <button
          onClick={() => setShowReviewModal(true)}
          className="px-6 py-3 bg-[#C5A572] text-[#2B1810] rounded-lg hover:bg-[#D4B684] transition duration-300 flex items-center space-x-2"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Write a Review</span>
        </button>
      </div>
      {showReviewModal && (
        <ReviewModal onShowReviewModal={setShowReviewModal} />
      )}
    </div>
  );
};

export default ReviewHeader;
