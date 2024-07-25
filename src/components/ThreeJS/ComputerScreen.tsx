import { useEffect, useRef } from "react";

import Image from "next/image";

import bootup from "../../images/bootupScreen.jpg";
import pcb from "../../images/kicadPCB.jpg";
import schematic from "../../images/kicadSchematic.jpg";

const ComputerScreen = ({section}: {section: number}) => {
  const screenRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = screenRef.current

    if (!img) return

    console.log(section)

    if (section === 2) {
      img.src = schematic
      img.alt = "Kicad Schematic Menu"
    } else if (section === 3) {
      img.src = pcb
      img.alt = "Kicad PCB Menu"
    }
  }, [section])

  return (
    <div className="w-screen h-screen absolute z-[999]">
      <Image src={bootup} ref={screenRef} alt="Macos bootup screen" fill />
    </div>
  );
};

export default ComputerScreen;
