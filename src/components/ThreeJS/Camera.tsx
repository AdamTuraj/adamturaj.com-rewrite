import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { damp } from "three/src/math/MathUtils.js";
import { Vector3 } from "three";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Camera = ({ section }: { section: number }) => {
  const { camera } = useThree();

  const [targetPosition, setTargetPosition] = useState<number[] | null>(null);

  useFrame((_, delta) => {
    const { position, rotation } = camera;
    // console.log([
    //   position.x,
    //   position.y,
    //   position.z,
    //   rotation.x,
    //   rotation.y,
    //   rotation.z,
    // ]);
    if (!targetPosition) return;

    const [targetX, targetY, targetZ, targetRotX, targetRotY, targetRotZ] =
      targetPosition;

    const l = 3;

    camera.position.x = damp(position.x, targetX, l, delta);
    camera.position.y = damp(position.y, targetY, l, delta);
    camera.position.z = damp(position.z, targetZ, l, delta);

    camera.rotation.x = damp(rotation.x, targetRotX, l, delta);
    camera.rotation.y = damp(rotation.y, targetRotY, l, delta);
    camera.rotation.z = damp(rotation.z, targetRotZ, l, delta);
  });

  useEffect(() => {
    if (section == 2) {
      setTargetPosition([-5.16, 7.38, -11.03, -0.6, -0.86, -0.48]);
    }
  }, [section]);

  useEffect(() => {
    camera.position.set(-35, 8, 8);
    camera.rotation.set(-1.1, -1.3, -1.08);
  }, []);

  return null;
};

export default Camera;
