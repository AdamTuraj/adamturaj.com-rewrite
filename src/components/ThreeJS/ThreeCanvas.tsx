"use client";

import { Canvas } from "@react-three/fiber";
import PCBModel from "./PCBModel";

const ThreeCanvas = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={1} />
      <PCBModel />
    </Canvas>
  );
};

export default ThreeCanvas;
