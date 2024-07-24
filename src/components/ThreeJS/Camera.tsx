import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Camera = () => {
  const scroll = useScroll();

  useFrame(({ camera }) => {
    const a = scroll.range(0, 1 / 20);

    // Position: [-4.714549200748335, 7.539716916804118, -10.618313806744329]
    // Rotation: [-0.6006714456155978, -0.8746568339424584, -0.4840041727658114]

    camera.position.x = a * -4.71 + (1 - a) * -35;
    camera.position.y = a * 7.53 + (1 - a) * 8;
    camera.position.z = a * -10.6 + (1 - a) * 8;

    camera.rotation.x = a * -0.6 + (1 - a) * -1.1;
    camera.rotation.y = a * -0.875 + (1 - a) * -1.3;
    camera.rotation.z = a * -0.484 + (1 - a) * -1.08;
  });

  return (
    <>
      {/* <PerspectiveCamera
        makeDefault
        position={[-3.55, 6.94, -11.3]}
        rotation={[-0.53, -0.888, -0.43]}
        zoom={0.6}
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
