"use client";

import Scene from "./Scene";
import Background from "./Background";
import Camera from "./Camera";

import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  ScrollControls,
  useProgress,
  Preload,
  PerformanceMonitor,
  Stats,
} from "@react-three/drei";
import Dialog from "./Dialog";

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
  const [dpr, setDpr] = useState(1.5);
  const [dialog, setDialog] = useState<string | null>("Test");

  return (
    <>
      {dialog && <Dialog text={dialog} />}
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          style={{ width: "100vw", height: "100vh" }}
          // className="blur-[2px]"
          dpr={dpr}
        >
          <color attach="background" args={["#fff"]} />
          <ambientLight intensity={1.2} />
          <AdaptiveDpr pixelated />

          <Background />

          <Preload all />

          <Stats showPanel={0} className="stats" />

          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          />

          <ScrollControls pages={5}>
            <Camera />
            <Scene dialog={setDialog} />
          </ScrollControls>
        </Canvas>
      </Suspense>
    </>
  );
};

export default ThreeCanvas;
