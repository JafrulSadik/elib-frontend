"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

type Props = {
  onShowReviewModal: (value: boolean) => void;
};

const ReviewModal = ({ onShowReviewModal }: Props) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[10000]"
    >
      <div className="bg-[#3D261C] rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-[#C5A572] mb-6">
          Write a Review
        </h2>

        <div className="mb-6">
          <label className="block text-[#C5A572] mb-2">Rating</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#C5A572] mb-2">Your Review</label>
          <textarea
            className="w-full px-4 py-3 bg-[#2B1810] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 h-32 resize-none"
            placeholder="Share your thoughts about the book..."
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => onShowReviewModal(false)}
            className="px-4 py-2 text-gray-400 hover:text-white transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle review submission
              onShowReviewModal(false);
            }}
            className="px-6 py-2 bg-[#C5A572] text-[#2B1810] rounded-lg hover:bg-[#D4B684] transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewModal;
