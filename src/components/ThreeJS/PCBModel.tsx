import { useGLTF } from "@react-three/drei";

const PCBModel = () => {
  const gltf = useGLTF("/PCBModel.glb");
  return <primitive object={gltf.scene} />;
};

export default PCBModel;
