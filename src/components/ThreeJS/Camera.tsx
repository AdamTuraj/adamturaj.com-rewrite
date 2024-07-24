import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { damp } from "three/src/math/MathUtils.js";

const Camera = ({
  section,
  setSceneVisibility,
}: {
  section: number;
  setSceneVisibility: Dispatch<SetStateAction<boolean>>;
}) => {
  const { camera } = useThree();

  const [targetPosition, setTargetPosition] = useState<number[] | null>(null);

  useFrame((_, delta) => {
    if (!targetPosition) return;

    const { position, rotation } = camera;

    const [targetX, targetY, targetZ, targetRotX, targetRotY, targetRotZ] =
      targetPosition;

    const l = 3;

    camera.position.x = damp(position.x, targetX, l, delta);
    camera.position.y = damp(position.y, targetY, l, delta);
    camera.position.z = damp(position.z, targetZ, l, delta);

    camera.rotation.x = damp(rotation.x, targetRotX, l, delta);
    camera.rotation.y = damp(rotation.y, targetRotY, l, delta);
    camera.rotation.z = damp(rotation.z, targetRotZ, l, delta);

    if (
      camera.position.x - targetX < 0.001 &&
      camera.position.y - targetY < 0.001
    ) {
      setSceneVisibility(false);
    }
  });

  useEffect(() => {
    if (section == 2) {
      setTargetPosition([-4.71, 7.3, -10.7, -0.6, -0.875, -0.484]);
    }
  }, [section]);

  return (
    <>
      {/* <PerspectiveCamera
        makeDefault
        position={[-4.8, 7.3, -10.2]}
        rotation={[-0.61, -0.84, -0.484]}
      /> */}
      <PerspectiveCamera
        makeDefault
        position={[-35, 8, 8]}
        rotation={[-1.1, -1.3, -1.08]}
      />
      {/* <OrbitControls makeDefault /> */}
    </>
  );
};

export default Camera;
