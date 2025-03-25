import { Star } from "lucide-react";
import Image from "next/image";
import ReviewHeader from "./ReviewHeader";

type Props = {
  onShowReviewModal: (value: boolean) => void;
};

const ReviewSection = () => {
  return (
    <div className="bg-[#3D261C]/80  rounded-xl p-8">
      <ReviewHeader />
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#2B1810] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1472099645785-5658abf4ff4e"
                      : i === 2
                      ? "1438761681033-6461ffad8d80"
                      : "1500648767791-00dcc994a43e"
                  }?auto=format&fit=crop&w=150&h=150&q=80`}
                  height={150}
                  width={150}
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-[#C5A572] font-semibold">
                    {["John Smith", "Emma Wilson", "Michael Brown"][i - 1]}
                  </h3>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= 4
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm">2 days ago</span>
            </div>
            <p className="text-gray-400">
              {
                [
                  "A fantastic read that kept me engaged throughout. The character development is exceptional and the plot twists are unexpected.",
                  "The world-building is incredible. I couldn't put it down!",
                  "An enjoyable story with memorable characters. Looking forward to reading more from this author.",
                ][i - 1]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
