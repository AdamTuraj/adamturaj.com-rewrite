const Dialog = ({ text }: { text: string }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <div className="w-screen h-10 bg-black/70">{text}</div>
    </div>
  );
};

export default Dialog;
