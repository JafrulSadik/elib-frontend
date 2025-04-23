"use client";

import { Expand, Shrink } from "lucide-react";
import { useState } from "react";

const SwitchFullScreen = () => {
  const [isFScreen, setFullScreen] = useState(false);
  const handleFullScreen = async () => {
    if (!isFScreen && document.fullscreenEnabled) {
      await document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else if (isFScreen && document.fullscreenElement) {
      await document.exitFullscreen();
      setFullScreen(false);
    } else {
      setFullScreen((prev) => !prev);
    }
  };

  return (
    <button
      onClick={handleFullScreen}
      className="p-1 md:p-3  bg-bgSecondary/80 text-textPrimary rounded-full hover:bg-bgSecondary/50"
    >
      {isFScreen ? (
        <Shrink className="text-textPrimary size-5" />
      ) : (
        <Expand className="text-textPrimary size-5" />
      )}
    </button>
  );
};

export default SwitchFullScreen;
