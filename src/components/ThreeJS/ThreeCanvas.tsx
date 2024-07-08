"use client";

import { Canvas } from "@react-three/fiber";
import PCBModel from "./PCBModel";
import { OrbitControls } from "@react-three/drei";

const ThreeCanvas = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <OrbitControls />

      <color attach="background" args={["#fff"]} />
      <ambientLight intensity={1} />
      <PCBModel position={[0, 0, 0]} scale={[15, 15, 15]} />
    </Canvas>
  );
};

export default ThreeCanvas;
