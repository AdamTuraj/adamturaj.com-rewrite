import useTypewriter from "../../hooks/useTypewriter";

const Dialog = ({ text }: { text: string }) => {
  const typewriterText = useTypewriter(text, 100);

  return (
    <div className="w-screen h-screen fixed z-[99999] pointer-events-none">
      <div className="absolute bottom-24">
        <div className="w-screen text-center text-gray-200 bg-black/70 text-xl px-10 py-5">
          {typewriterText}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
