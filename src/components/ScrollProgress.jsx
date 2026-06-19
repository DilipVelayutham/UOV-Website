import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-1 bg-violet-600 transition-all duration-150"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

export default ScrollProgress;