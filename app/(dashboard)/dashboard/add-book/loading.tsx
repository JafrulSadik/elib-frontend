import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader className="animate-spin size-5 text-textPrimary/30" />
    </div>
  );
};

export default Loading;
