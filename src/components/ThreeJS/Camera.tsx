import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Camera = ({section}: {section: number}) => {
  const {camera} = useThree()

  useEffect(() => {
    if (section == 2) {
      const {rotation, position} = camera
        position.x = -4.71
        position.y = 7.3
        position.z = -10.7

        rotation.x = -0.6
        rotation.y = -0.875
        rotation.z = -0.484
    }
  }, [section])

  return (
    <>
      {/* <PerspectiveCamera
        makeDefault
        position={[-4.71, 7.3, -10.7]}
        rotation={[-0.6, -0.875, -0.484]}
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
