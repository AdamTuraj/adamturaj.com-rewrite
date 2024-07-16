import * as THREE from "three";

import { useLoader, useThree } from "@react-three/fiber";

const Background = () => {
  const { scene } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/textures/background.jpeg");

  scene.background = texture;

  return null;
}

export default Background;