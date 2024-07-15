import { useRef } from "react";

import { useGLTF, useScroll } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

const Scene = () => {
  const scroll = useScroll();
  const primitiveRef = useRef<PrimitiveProps>();

  // // Slowly rotate the model around the y and x axis
  // useFrame(() => {
  //   if (primitiveRef.current) {
  //     primitiveRef.current.rotation.y += 0.01;
  //     primitiveRef.current.rotation.x += 0.01;
  //   }
  // });

  useFrame(({camera}) => {
    console.log(camera.position);
    console.log(camera.rotation);
    console.log(camera.zoom);
  })

  const gltf = useGLTF("/models/PortfolioScene.glb");

  return (
    <primitive ref={primitiveRef} object={gltf.scene} position={[0, 0, 0]} />
  );
};

useGLTF.preload("/models/PortfolioScene.glb");

export default Scene;
