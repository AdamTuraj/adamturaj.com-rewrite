import { useEffect, useState } from "react";

const Typewriter = (text: string, delay: number) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeLetter = () => {
      const randomDelay = delay + (Math.random() * 20 - 10);

      timeout = setTimeout(
        () => {
          if (index < text.length) {
            setIndex((prev) => prev + 1);

            typeLetter();
          }
        },
        text.charAt(index - 1) == "." || text.charAt(index - 1) == "!"
          ? randomDelay * 4
          : randomDelay
      );
    };

    typeLetter();

    return () => clearTimeout(timeout);
  }, [text, delay, index]);

  // Otherwise it doesn't fully restart
  useEffect(() => {
    setIndex(0);
  }, [text]);

  return text.slice(0, index);
};

export default Typewriter;
