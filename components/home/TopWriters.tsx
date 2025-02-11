import { Star } from "lucide-react";

const TopWriters = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#C5A572] mb-8">Top Writers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#3D261C] rounded-xl p-6 flex items-center space-x-4"
          >
            <img
              src={`https://images.unsplash.com/photo-${
                i === 1
                  ? "1472099645785-5658abf4ff4e"
                  : i === 2
                  ? "1438761681033-6461ffad8d80"
                  : "1500648767791-00dcc994a43e"
              }?auto=format&fit=crop&w=150&h=150&q=80`}
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-[#C5A572] font-semibold">
                {["Robert Wilson", "Emily Johnson", "Michael Chang"][i - 1]}
              </h3>
              <p className="text-gray-400 text-sm">
                Total Downloads: {i * 1500}
              </p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-400 text-sm ml-1">
                  {4.7 + i * 0.1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopWriters;
