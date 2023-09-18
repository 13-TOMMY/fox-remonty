import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BannerProps {
  keywords: string[];
}

function Banner({ keywords }: BannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [keywords]);

  return (
    <div className="banner-container">
      <img src="/imgs/RE.svg" alt="" />
      <div className="word-carousel">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1 }}
          >
            {keywords[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Banner;