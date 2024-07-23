import { useEffect, useState } from "react";

const typeText = (
  text: string,
  delay: number,
  setText: React.Dispatch<React.SetStateAction<string | null>>
) => {
  let index = 0;

  const typeLetter = () => {
    if (index < text.length) {
      setText((prev) => (prev ? prev + text[index] : text[index]));
      console.log(index);
      index++;
      setTimeout(typeLetter, text[index] == "." ? delay * 5 : delay);
    }
  };

  typeLetter();

  setText((prev) => (prev += " "));
};

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [x, setText] = useState<string | null>(null);
  useEffect(() => {
    const splitText = text.split(" ");

    splitText.forEach((word) => {
      typeText(word, delay, setText);
    });
  }, [text, delay]);

  return <div>{x}</div>;
};

const Dialog = ({ text }: { text: string }) => {
  return (
    <div className="w-screen h-screen fixed z-[99999] pointer-events-none">
      <div className="absolute bottom-24">
        <div className="w-screen text-center text-gray-200 bg-black/70 text-xl px-10 py-5">
          <Typewriter delay={100} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Dialog;
