import { useRef } from "react";

import { useGLTF, useScroll } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

const PCBModel = () => {
  const scroll = useScroll();
  const primitiveRef = useRef<PrimitiveProps>();

  // Slowly rotate the model around the y and x axis
  useFrame(() => {
    if (primitiveRef.current) {
      primitiveRef.current.rotation.y += 0.01;
      primitiveRef.current.rotation.x += 0.01;
    }
  });

  const gltf = useGLTF("/PCBModel.glb");

  return (
    <primitive ref={primitiveRef} object={gltf.scene} position={[0, 0, 0]} />
  );
};

useGLTF.preload("/PCBModel.glb");

export default PCBModel;
