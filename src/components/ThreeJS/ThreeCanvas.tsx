"use client";

import { Canvas } from "@react-three/fiber";
import PCBModel from "./PCBModel";
import { OrbitControls, Stage } from "@react-three/drei";

const ThreeCanvas = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <OrbitControls makeDefault />
      <color attach="background" args={["#fff"]} />

      <Stage
        adjustCamera
        position={[0, 0, 0]}
        intensity={0.01}
        environment="city"
      >
        <PCBModel />
      </Stage>
    </Canvas>
  );
};

export default ThreeCanvas;
