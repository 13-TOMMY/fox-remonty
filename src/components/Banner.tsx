import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e: WheelEvent) => {
      const delta = e.deltaY;
      setScrollPosition((prevScrollPosition) => prevScrollPosition + delta);
    };

    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="banner-container" ref={containerRef}>
     <img src="/imgs/RE.svg" alt="" />
    <div className="banner-scrolling-text" style={{ transform: `translateX(${scrollPosition}px)` }}>
      <h2 className="banner-scrolling-text-content">
        This is some other text, not so big but still very big This is some other text, not so big but still very big
      </h2>
    </div>
  </div>
  );
}

export default Banner;