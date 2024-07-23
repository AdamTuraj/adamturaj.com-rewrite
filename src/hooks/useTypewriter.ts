import { useEffect, useState } from "react";

const Typewriter = (text: string, delay: number) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const typeLetter = () => {
      const randomDelay = delay + (Math.random() * 20 - 10);

      interval = setTimeout(() => {
        if (index < text.length) {
          setIndex((prev) => prev + 1);

          typeLetter();
        }
      }, randomDelay);
    };

    typeLetter();

    return () => clearTimeout(interval);
  }, [text, delay]);

  return text.slice(0, index);
};

export default Typewriter;
