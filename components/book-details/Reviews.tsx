import { Star } from "lucide-react";
import Image from "next/image";

const Reviews = ({ i }: { i: number }) => {
  return (
    <div className="bg-[#2B1810] rounded-xl p-4 md:p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 md:space-x-4">
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
            className="size-10 md:size-12 rounded-full"
          />
          <div>
            <h3 className="text-sm md:text-base text-textPrimary font-semibold">
              {["John Smith", "Emma Wilson", "Michael Brown"][i - 1]}
            </h3>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`size-3 md:size-4 ${
                    star <= 4 ? "text-yellow-400 fill-current" : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-gray-400 text-sm">2 days ago</span>
      </div>
      <p className="text-gray-400 text-sm md:text-base">
        {
          [
            "A fantastic read that kept me engaged throughout. The character development is exceptional and the plot twists are unexpected.",
            "The world-building is incredible. I couldn't put it down!",
            "An enjoyable story with memorable characters. Looking forward to reading more from this author.",
          ][i - 1]
        }
      </p>
    </div>
  );
};

export default Reviews;
