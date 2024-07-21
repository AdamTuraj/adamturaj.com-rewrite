"use client";

import Scene from "./Scene";
import Background from "./Background";

import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  ScrollControls,
  useProgress,
  Preload,
  PerformanceMonitor,
  PerspectiveCamera,
  Stats,
  OrbitControls,
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
  const [dpr, setDpr] = useState(1.5);

  return (
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
        <PerspectiveCamera
          makeDefault
          position={[-35, 8, 8]}
          rotation={[-1.1, -1.3, -1.08]}
        />
        {/* <OrbitControls makeDefault enablePan={false} position={[-35, 8, 13]} /> */}

        <Background />

        <Preload all />

        <Stats showPanel={0} className="stats" />

        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />

        <ScrollControls pages={5}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default ThreeCanvas;
