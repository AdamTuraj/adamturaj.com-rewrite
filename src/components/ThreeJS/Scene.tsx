/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 PortfolioScene.glb --types 
*/

import * as THREE from "three";
import React from "react";
import { Plane, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CuttingMat from "./CuttingMat";

type GLTFResult = GLTF & {
  nodes: {
    Computer_1: THREE.Mesh;
    Computer_2: THREE.Mesh;
    Computer_3: THREE.Mesh;
    Computer_4: THREE.Mesh;
    Computer_5: THREE.Mesh;
    Computer_6: THREE.Mesh;
    Computer_7: THREE.Mesh;
    Computer_8: THREE.Mesh;
    PCB_Model_1: THREE.Mesh;
    PCB_Model_2: THREE.Mesh;
    PCB_Model_3: THREE.Mesh;
    PCB_Model_4: THREE.Mesh;
    PCB_Model_5: THREE.Mesh;
    PCB_Model_6: THREE.Mesh;
    PCB_Model_7: THREE.Mesh;
    PCB_Model_8: THREE.Mesh;
    PCB_Model_9: THREE.Mesh;
    PCB_Model_10: THREE.Mesh;
    PCB_Model_11: THREE.Mesh;
    PCB_Model_12: THREE.Mesh;
    PCB_Model_13: THREE.Mesh;
    PCB_Model_14: THREE.Mesh;
    PCB_Model_15: THREE.Mesh;
    PCB_Model_16: THREE.Mesh;
    PCB_Model_17: THREE.Mesh;
    PCB_Model_18: THREE.Mesh;
    PCB_Model_19: THREE.Mesh;
    PCB_Model_20: THREE.Mesh;
    PCB_Model_21: THREE.Mesh;
    Bench_1: THREE.Mesh;
    Bench_2: THREE.Mesh;
    Bench_3: THREE.Mesh;
    Bench_4: THREE.Mesh;
    USB_Cable: THREE.Mesh;
    USB_Heads_1: THREE.Mesh;
    USB_Heads_2: THREE.Mesh;
    USB_Heads_3: THREE.Mesh;
    Probe_Cable: THREE.Mesh;
    Oscilloscope001: THREE.Mesh;
    Oscilloscope001_1: THREE.Mesh;
    Oscilloscope001_2: THREE.Mesh;
    Oscilloscope001_3: THREE.Mesh;
    Oscilloscope001_4: THREE.Mesh;
    Oscilloscope001_5: THREE.Mesh;
    Oscilloscope001_6: THREE.Mesh;
    Oscilloscope001_7: THREE.Mesh;
    Oscilloscope001_8: THREE.Mesh;
    Oscilloscope001_9: THREE.Mesh;
    Oscilloscope001_10: THREE.Mesh;
    Oscilloscope001_11: THREE.Mesh;
    Oscilloscope001_12: THREE.Mesh;
    Oscilloscope001_13: THREE.Mesh;
    Oscilloscope001_14: THREE.Mesh;
    Oscilloscope001_15: THREE.Mesh;
    Oscilloscope001_16: THREE.Mesh;
    Oscilloscope001_17: THREE.Mesh;
    Oscilloscope001_18: THREE.Mesh;
    Oscilloscope001_19: THREE.Mesh;
    Oscilloscope001_20: THREE.Mesh;
    Oscilloscope001_21: THREE.Mesh;
    Oscilloscope001_22: THREE.Mesh;
    Oscilloscope001_23: THREE.Mesh;
    Oscilloscope001_24: THREE.Mesh;
    Oscilloscope001_25: THREE.Mesh;
    Oscilloscope001_26: THREE.Mesh;
    Oscilloscope001_27: THREE.Mesh;
    Oscilloscope001_28: THREE.Mesh;
    Oscilloscope001_29: THREE.Mesh;
    Oscilloscope001_30: THREE.Mesh;
    Oscilloscope001_31: THREE.Mesh;
    Oscilloscope001_32: THREE.Mesh;
    Oscilloscope001_33: THREE.Mesh;
    Oscilloscope001_34: THREE.Mesh;
    Oscilloscope001_35: THREE.Mesh;
    Oscilloscope001_36: THREE.Mesh;
    Oscilloscope001_37: THREE.Mesh;
    Oscilloscope001_38: THREE.Mesh;
    Oscilloscope001_39: THREE.Mesh;
    Oscilloscope001_40: THREE.Mesh;
    Oscilloscope001_41: THREE.Mesh;
    Oscilloscope001_42: THREE.Mesh;
    Oscilloscope001_43: THREE.Mesh;
    Oscilloscope001_44: THREE.Mesh;
    Oscilloscope001_45: THREE.Mesh;
    Oscilloscope001_46: THREE.Mesh;
    Oscilloscope001_47: THREE.Mesh;
    Oscilloscope001_48: THREE.Mesh;
    Oscilloscope001_49: THREE.Mesh;
    Oscilloscope001_50: THREE.Mesh;
    Oscilloscope001_51: THREE.Mesh;
    Oscilloscope001_52: THREE.Mesh;
    Oscilloscope001_53: THREE.Mesh;
    Screen_1: THREE.Mesh;
    Screen_2: THREE.Mesh;
    Screen_3: THREE.Mesh;
    Screen_4: THREE.Mesh;
  };
  materials: {
    ["Opaque(244,244,244)"]: THREE.MeshStandardMaterial;
    ["Opaque(5,5,5)"]: THREE.MeshStandardMaterial;
    ["Opaque(190,188,186)"]: THREE.MeshStandardMaterial;
    ["Opaque(128,128,128)"]: THREE.MeshStandardMaterial;
    ["Opaque(191,191,191)"]: THREE.MeshStandardMaterial;
    ["Opaque(63,63,63)"]: THREE.MeshStandardMaterial;
    ["Opaque(173,173,173)"]: THREE.MeshStandardMaterial;
    ["Opaque(204,204,204)"]: THREE.MeshStandardMaterial;
    ["Opaque(219,188,126)"]: THREE.MeshStandardMaterial;
    ["Opaque(250,235,214)"]: THREE.MeshStandardMaterial;
    ["Opaque(65,195,130)"]: THREE.MeshStandardMaterial;
    ["Opaque(51,153,102)"]: THREE.MeshStandardMaterial;
    ["Opaque(210,209,199)"]: THREE.MeshStandardMaterial;
    ["Opaque(97,69,55)"]: THREE.MeshStandardMaterial;
    ["Opaque(228,227,207)"]: THREE.MeshStandardMaterial;
    ["Opaque(21,22,24)"]: THREE.MeshStandardMaterial;
    ["Opaque(87,173,113)"]: THREE.MeshStandardMaterial;
    ["Opaque(70,70,70)"]: THREE.MeshStandardMaterial;
    ["Opaque(38,37,37)"]: THREE.MeshStandardMaterial;
    ["Opaque(255,255,255)"]: THREE.MeshStandardMaterial;
    ["Opaque(247,224,153)"]: THREE.MeshStandardMaterial;
    ["Opaque(255,245,209)"]: THREE.MeshStandardMaterial;
    ["Opaque(150,150,150)"]: THREE.MeshStandardMaterial;
    ["Opaque(50,50,50)"]: THREE.MeshStandardMaterial;
    ["Opaque(185,185,185)"]: THREE.MeshStandardMaterial;
    ["Opaque(37,36,36)"]: THREE.MeshStandardMaterial;
    ["Opaque(176,169,152)"]: THREE.MeshStandardMaterial;
    ["Opaque(41,41,41)"]: THREE.MeshStandardMaterial;
    Arbetshylla: THREE.MeshStandardMaterial;
    ["Arbetsbänk Skiva"]: THREE.MeshStandardMaterial;
    ["Leg.001"]: THREE.MeshStandardMaterial;
    ["Mat 01"]: THREE.MeshStandardMaterial;
    ["black.004"]: THREE.MeshStandardMaterial;
    ["black grain.004"]: THREE.MeshStandardMaterial;
    ["metal_02.005"]: THREE.MeshStandardMaterial;
    ["Black.002"]: THREE.MeshStandardMaterial;
    ["Glas.001"]: THREE.MeshPhysicalMaterial;
    ["Gold.001"]: THREE.MeshStandardMaterial;
    ["Metal.001"]: THREE.MeshStandardMaterial;
    ["Gray black pastic.001"]: THREE.MeshStandardMaterial;
    ["Knop.001"]: THREE.MeshStandardMaterial;
    ["Besch.001"]: THREE.MeshStandardMaterial;
    ["Car chrome.002"]: THREE.MeshStandardMaterial;
    ["TXT_Hinten-die-zweite.001"]: THREE.MeshStandardMaterial;
    ["Beschriftung hinten-USB.001"]: THREE.MeshStandardMaterial;
    ["Besch.Tasten-hintergrund.001"]: THREE.MeshStandardMaterial;
    ["Restauration.001"]: THREE.MeshStandardMaterial;
    ["Metal-Farbe-01.001"]: THREE.MeshStandardMaterial;
    ["Isolator.001"]: THREE.MeshStandardMaterial;
    ["Kupfer.001"]: THREE.MeshStandardMaterial;
    ["Text_hinten.001"]: THREE.MeshStandardMaterial;
    ["Schwarz_01.001"]: THREE.MeshStandardMaterial;
    ["Gold.Steel.001"]: THREE.MeshStandardMaterial;
    ["LED_Grün.001"]: THREE.MeshStandardMaterial;
    ["LED_Rot.001"]: THREE.MeshStandardMaterial;
    ["Stecker_Schwarz.001"]: THREE.MeshStandardMaterial;
    ["Steel_Gebürsted.001"]: THREE.MeshStandardMaterial;
    ["Black.001"]: THREE.MeshStandardMaterial;
    ["Kabel-Schwarz.001"]: THREE.MeshStandardMaterial;
    ["Kabel-Metal.001"]: THREE.MeshStandardMaterial;
    ["Plastic structured in gray.002"]: THREE.MeshStandardMaterial;
    ["Besch.Überschrift.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Menue-buton.Color.001"]: THREE.MeshStandardMaterial;
    ["Menue-Pfeile-blau.001"]: THREE.MeshStandardMaterial;
    ["Menue-buton-M.001"]: THREE.MeshStandardMaterial;
    ["Grau.001"]: THREE.MeshStandardMaterial;
    ["RUN-STOP_txt.001"]: THREE.MeshStandardMaterial;
    ["LED-Grün.001"]: THREE.MeshStandardMaterial;
    ["Buton-Blau.001"]: THREE.MeshStandardMaterial;
    ["Metal.009"]: THREE.MeshStandardMaterial;
    ["Kabel-Schwarz.009"]: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    ["Platine.001"]: THREE.MeshStandardMaterial;
  };
};

const Scene = () => {
  const { nodes, materials } = useGLTF(
    "/models/PortfolioScene.glb"
  ) as GLTFResult;

  const videoTexture = useVideoTexture("/textures/computerScreen.mp4");
  const oscilloscopeTexture = useTexture("/textures/oscilloscopeScreen.jpg");

  return (
    <>
      <group dispose={null}>
        {/* Bench */}
        <group scale={[0.145, 0.01, 0.92]}>
          <mesh
            geometry={nodes.Bench_1.geometry}
            material={materials.Arbetshylla}
          />
          <mesh
            geometry={nodes.Bench_2.geometry}
            material={materials["Arbetsbänk Skiva"]}
          />
          <mesh
            geometry={nodes.Bench_3.geometry}
            material={materials["Leg.001"]}
          />
          <mesh
            geometry={nodes.Bench_4.geometry}
            material={materials["Mat 01"]}
          />
        </group>

        {/* USB */}
        <group>
          {/* USB Cable */}
          <mesh
            geometry={nodes.USB_Cable.geometry}
            material={materials["black.004"]}
          />

          {/* USB Heads */}
          <group>
            <mesh
              geometry={nodes.USB_Heads_1.geometry}
              material={materials["black grain.004"]}
            />
            <mesh
              geometry={nodes.USB_Heads_2.geometry}
              material={materials["black.004"]}
            />
            <mesh
              geometry={nodes.USB_Heads_3.geometry}
              material={materials["metal_02.005"]}
            />
          </group>
        </group>

        {/* Computer */}
        <group>
          <mesh
            geometry={nodes.Computer_1.geometry}
            material={materials["Opaque(244,244,244)"]}
          />
          <mesh geometry={nodes.Computer_2.geometry} rotation={[0, 0, 0]} />
          <Plane
            rotation={[-Math.PI / 5.4, -Math.PI / 3.6, -Math.PI / 6.7]}
            position={[0.025, 0.102, -0.3]}
            scale={[0.3, 0.18, 1]}
          >
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
          </Plane>
          <mesh
            geometry={nodes.Computer_3.geometry}
            material={materials["Opaque(5,5,5)"]}
          />
          <mesh
            geometry={nodes.Computer_4.geometry}
            material={materials["Opaque(190,188,186)"]}
          />
          <mesh
            geometry={nodes.Computer_5.geometry}
            material={materials["Opaque(128,128,128)"]}
          />
          <mesh
            geometry={nodes.Computer_6.geometry}
            material={materials["Opaque(191,191,191)"]}
          />
          <mesh
            geometry={nodes.Computer_7.geometry}
            material={materials["Opaque(63,63,63)"]}
          />
          <mesh
            geometry={nodes.Computer_8.geometry}
            material={materials["Opaque(173,173,173)"]}
          />
        </group>

        {/* PCB */}
        <group>
          <mesh
            geometry={nodes.PCB_Model_1.geometry}
            material={materials["Opaque(204,204,204)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_2.geometry}
            material={materials["Opaque(219,188,126)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_3.geometry}
            material={materials["Opaque(250,235,214)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_4.geometry}
            material={materials["Opaque(65,195,130)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_5.geometry}
            material={materials["Opaque(51,153,102)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_6.geometry}
            material={materials["Opaque(210,209,199)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_7.geometry}
            material={materials["Opaque(97,69,55)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_8.geometry}
            material={materials["Opaque(228,227,207)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_9.geometry}
            material={materials["Opaque(21,22,24)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_10.geometry}
            material={materials["Opaque(87,173,113)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_11.geometry}
            material={materials["Opaque(70,70,70)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_12.geometry}
            material={materials["Opaque(38,37,37)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_13.geometry}
            material={materials["Opaque(255,255,255)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_14.geometry}
            material={materials["Opaque(247,224,153)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_15.geometry}
            material={materials["Opaque(255,245,209)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_16.geometry}
            material={materials["Opaque(150,150,150)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_17.geometry}
            material={materials["Opaque(50,50,50)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_18.geometry}
            material={materials["Opaque(185,185,185)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_19.geometry}
            material={materials["Opaque(37,36,36)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_20.geometry}
            material={materials["Opaque(176,169,152)"]}
          />
          <mesh
            geometry={nodes.PCB_Model_21.geometry}
            material={materials["Opaque(41,41,41)"]}
          />
        </group>

        {/* Probe Cable */}
        <mesh
          geometry={nodes.Probe_Cable.geometry}
          material={materials["Black.002"]}
        />

        {/* Oscilloscope */}
        <group position={[0.051, 0.106, 0.11]} rotation={[0, -1.548, 0]}>
          <mesh
            geometry={nodes.Oscilloscope001.geometry}
            material={materials["Glas.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_1.geometry}
            material={materials["Gold.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_2.geometry}
            material={materials["Metal.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_3.geometry}
            material={materials["Gray black pastic.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_4.geometry}
            material={materials["Knop.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_5.geometry}
            material={materials["Besch.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_6.geometry}
            material={materials["Gold.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_7.geometry}
            material={materials["Car chrome.002"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_8.geometry}
            material={materials["TXT_Hinten-die-zweite.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_9.geometry}
            material={materials["Beschriftung hinten-USB.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_10.geometry}
            material={materials["Besch.Tasten-hintergrund.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_11.geometry}
            material={materials["Restauration.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_12.geometry}
            material={materials["Metal-Farbe-01.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_13.geometry}
            material={materials["Isolator.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_14.geometry}
            material={materials["Kupfer.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_15.geometry}
            material={materials["Car chrome.002"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_16.geometry}
            material={materials["Text_hinten.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_17.geometry}
            material={materials["Schwarz_01.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_18.geometry}
            material={materials["Gold.Steel.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_19.geometry}
            material={materials["LED_Grün.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_20.geometry}
            material={materials["LED_Rot.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_21.geometry}
            material={materials["Stecker_Schwarz.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_22.geometry}
            material={materials["Steel_Gebürsted.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_23.geometry}
            material={materials["Black.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_24.geometry}
            material={materials["Kabel-Schwarz.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_25.geometry}
            material={materials["Kabel-Metal.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_26.geometry}
            material={materials["Plastic structured in gray.002"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_27.geometry}
            material={materials["Metal.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_28.geometry}
            material={materials["Besch.Überschrift.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_29.geometry}
            material={materials["Plastic structured in gray.002"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_30.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_31.geometry}
            material={materials["Menue-buton.Color.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_32.geometry}
            material={materials["Menue-Pfeile-blau.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_33.geometry}
            material={materials["Menue-buton-M.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_34.geometry}
            material={materials["Grau.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_35.geometry}
            material={materials["RUN-STOP_txt.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_36.geometry}
            material={materials["LED-Grün.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_37.geometry}
            material={materials["Buton-Blau.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_38.geometry}
            material={materials["Metal.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_39.geometry}
            material={materials["Isolator.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_40.geometry}
            material={materials["Kabel-Schwarz.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_41.geometry}
            material={materials.Gold}
          />
          <mesh
            geometry={nodes.Oscilloscope001_42.geometry}
            material={materials["Metal.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_43.geometry}
            material={materials["Isolator.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_44.geometry}
            material={materials["Kabel-Schwarz.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_45.geometry}
            material={materials.Gold}
          />
          <mesh
            geometry={nodes.Oscilloscope001_46.geometry}
            material={materials["Metal.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_47.geometry}
            material={materials["Isolator.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_48.geometry}
            material={materials["Kabel-Schwarz.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_49.geometry}
            material={materials.Gold}
          />
          <mesh
            geometry={nodes.Oscilloscope001_50.geometry}
            material={materials["Metal.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_51.geometry}
            material={materials["Isolator.001"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_52.geometry}
            material={materials["Kabel-Schwarz.009"]}
          />
          <mesh
            geometry={nodes.Oscilloscope001_53.geometry}
            material={materials.Gold}
          />
        </group>
        <group position={[0.051, 0.106, 0.11]} rotation={[0, -1.548, 0]}>
          <mesh
            geometry={nodes.Screen_1.geometry}
            material={materials["Besch.Tasten-hintergrund.001"]}
          />
          <mesh
            geometry={nodes.Screen_2.geometry}
            material={materials["Besch.001"]}
          />
          <mesh geometry={nodes.Screen_3.geometry}>
            <meshBasicMaterial map={oscilloscopeTexture} toneMapped={false} />
          </mesh>
          <mesh
            geometry={nodes.Screen_4.geometry}
            material={materials["Platine.001"]}
          />
        </group>
      </group>
      <CuttingMat />
    </>
  );
};

useGLTF.preload("/models/PortfolioScene.glb");

export default Scene;
