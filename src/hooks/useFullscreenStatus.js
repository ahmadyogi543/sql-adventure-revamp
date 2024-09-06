import { useState, useEffect } from "react";

const useFullscreenStatus = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const checkFullscreenStatus = () => {
    if (document.fullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    // Initial check for fullscreen status
    checkFullscreenStatus();

    // Event listener for fullscreen change
    const handleFullscreenChange = () => {
      checkFullscreenStatus();
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return isFullscreen;
};

export default useFullscreenStatus;
