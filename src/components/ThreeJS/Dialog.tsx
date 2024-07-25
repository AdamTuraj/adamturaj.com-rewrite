import { Dispatch, SetStateAction, useEffect } from "react";
import useTypewriter from "../../hooks/useTypewriter";

const Dialog = ({
  text,
  setDialogDone,
}: {
  text: string;
  setDialogDone: Dispatch<SetStateAction<boolean>>;
}) => {
  const typewriterText = useTypewriter(text, 75);

  useEffect(() => {
    setDialogDone(false);
  }, []);

  useEffect(() => {
    if (typewriterText == text) {
      setTimeout(() => {
        setDialogDone(true);
      }, 2000);
    }
  }, [typewriterText, text]);

  return (
    <div className="w-screen h-screen fixed z-[99999] pointer-events-none">
      <div className="absolute bottom-24">
        <div className="w-screen text-center text-gray-200 bg-black/70 text-xl px-10 py-5">
          <p className="max-w-[70vw] mx-auto">{typewriterText}</p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
