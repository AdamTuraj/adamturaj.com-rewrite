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
          position={[
            -0.35773433178572334, 0.12123904332118751, 0.05623705731566958,
          ]}
          rotation={[
            -0.6548807824899788, -1.3727113665847221, -0.645365890277982,
          ]}
          zoom={0.8}
        />
        {/* <OrbitControls makeDefault /> */}

        <Background />

        <Preload all />

        <Stats showPanel={0} className="stats" />

        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />

        <ScrollControls pages={5}>
          <Scene />
          {/* <ComputerScreen /> */}
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default ThreeCanvas;
