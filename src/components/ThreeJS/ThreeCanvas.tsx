"use client";

import PCBModel from "./PCBModel";

import { Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ScrollControls,
  Stage,
  useProgress,
  useScroll,
} from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  // TODO: Change to proper loading screen

  return (
    <div className="w-screen h-screen flex items-center justify-center text-3xl font-bold text-white">
      Loading {Math.round(progress)}%
    </div>
  );
};

const ThreeCanvas = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        style={{ width: "100vw", height: "100vh" }}
        className="blur-[2px]"
        camera={{ zoom: 150 }}
      >
        <color attach="background" args={["#fff"]} />
        <ambientLight intensity={1.2} />

        <ScrollControls pages={5}>
          <PCBModel />
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default ThreeCanvas;
