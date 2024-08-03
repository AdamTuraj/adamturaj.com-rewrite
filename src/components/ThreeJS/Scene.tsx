/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 PortfolioScene.glb --types 
*/

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import * as THREE from "three";
import { Plane, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

import CuttingMat from "./CuttingMat";

type GLTFResult = GLTF & {
  nodes: {
    ESC_PCB_1: THREE.Mesh;
    ESC_PCB_2: THREE.Mesh;
    ESC_PCB_3: THREE.Mesh;
    ESC_PCB_4: THREE.Mesh;
    ESC_PCB_5: THREE.Mesh;
    ESC_PCB_6: THREE.Mesh;
    ESC_PCB_7: THREE.Mesh;
    FCU_PCB_1: THREE.Mesh;
    FCU_PCB_2: THREE.Mesh;
    FCU_PCB_3: THREE.Mesh;
    FCU_PCB_4: THREE.Mesh;
    FCU_PCB_5: THREE.Mesh;
    FCU_PCB_6: THREE.Mesh;
    FCU_PCB_7: THREE.Mesh;
    FCU_PCB_8: THREE.Mesh;
    FCU_PCB_9: THREE.Mesh;
    FCU_PCB_10: THREE.Mesh;
    FCU_PCB_11: THREE.Mesh;
    FCU_PCB_12: THREE.Mesh;
    FCU_PCB_13: THREE.Mesh;
    FCU_PCB_14: THREE.Mesh;
    FCU_PCB_15: THREE.Mesh;
    FCU_PCB_16: THREE.Mesh;
    FCU_PCB_17: THREE.Mesh;
    FCU_PCB_18: THREE.Mesh;
    FCU_PCB_19: THREE.Mesh;
    FCU_PCB_20: THREE.Mesh;
    FCU_PCB_21: THREE.Mesh;
    FCU_PCB_22: THREE.Mesh;
    Frame: THREE.Mesh;
    Motor_1_1: THREE.Mesh;
    Motor_1_2: THREE.Mesh;
    Motor_1_3: THREE.Mesh;
    Motor_1_4: THREE.Mesh;
    Motor_1_5: THREE.Mesh;
    Motor_1_6: THREE.Mesh;
    Motor_2_1: THREE.Mesh;
    Motor_2_2: THREE.Mesh;
    Motor_2_3: THREE.Mesh;
    Motor_2_4: THREE.Mesh;
    Motor_2_5: THREE.Mesh;
    Motor_2_6: THREE.Mesh;
    Motor_3_1: THREE.Mesh;
    Motor_3_2: THREE.Mesh;
    Motor_3_3: THREE.Mesh;
    Motor_3_4: THREE.Mesh;
    Motor_3_5: THREE.Mesh;
    Motor_3_6: THREE.Mesh;
    Motor_4_1: THREE.Mesh;
    Motor_4_2: THREE.Mesh;
    Motor_4_3: THREE.Mesh;
    Motor_4_4: THREE.Mesh;
    Motor_4_5: THREE.Mesh;
    Motor_4_6: THREE.Mesh;
    Prop_1_1: THREE.Mesh;
    Prop_1_2: THREE.Mesh;
    Prop_2_1: THREE.Mesh;
    Prop_2_2: THREE.Mesh;
    Prop_3_1: THREE.Mesh;
    Prop_3_2: THREE.Mesh;
    Screw: THREE.Mesh;
    Screw001: THREE.Mesh;
    Screw002: THREE.Mesh;
    Screw003: THREE.Mesh;
    Spacers: THREE.Mesh;
    Computer_1: THREE.Mesh;
    Computer_2: THREE.Mesh;
    Computer_3: THREE.Mesh;
    Computer_4: THREE.Mesh;
    Computer_5: THREE.Mesh;
    Computer_6: THREE.Mesh;
    Computer_7: THREE.Mesh;
    Computer_8: THREE.Mesh;
    Bench_1: THREE.Mesh;
    Bench_2: THREE.Mesh;
    Bench_3: THREE.Mesh;
    Bench_4: THREE.Mesh;
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
    ["Opaque(255,255,255).001"]: THREE.MeshStandardMaterial;
    ["Plastic - Matte (Black).001"]: THREE.MeshStandardMaterial;
    ["Opaque(243,203,124).001"]: THREE.MeshStandardMaterial;
    ["Opaque(160,160,160).001"]: THREE.MeshStandardMaterial;
    ["Opaque(255,215,0).001"]: THREE.MeshStandardMaterial;
    ["ABS (White).001"]: THREE.MeshStandardMaterial;
    ["Copper - Raw.001"]: THREE.MeshStandardMaterial;
    ["Opaque(65,195,130).001"]: THREE.MeshStandardMaterial;
    ["Opaque(250,235,214).001"]: THREE.MeshStandardMaterial;
    ["Opaque(51,153,102).001"]: THREE.MeshStandardMaterial;
    ["Opaque(210,209,199).001"]: THREE.MeshStandardMaterial;
    ["Opaque(97,69,55).001"]: THREE.MeshStandardMaterial;
    ["Opaque(204,204,204).001"]: THREE.MeshStandardMaterial;
    ["Opaque(228,227,207).001"]: THREE.MeshStandardMaterial;
    ["Opaque(21,22,24).001"]: THREE.MeshStandardMaterial;
    ["Opaque(247,224,153).001"]: THREE.MeshStandardMaterial;
    ["Opaque(38,37,37).001"]: THREE.MeshStandardMaterial;
    ["Opaque(219,188,126).001"]: THREE.MeshStandardMaterial;
    ["Opaque(87,173,113).001"]: THREE.MeshStandardMaterial;
    ["Opaque(70,70,70).001"]: THREE.MeshStandardMaterial;
    ["Opaque(255,245,209).001"]: THREE.MeshStandardMaterial;
    ["Opaque(150,150,150).001"]: THREE.MeshStandardMaterial;
    ["Opaque(50,50,50).001"]: THREE.MeshStandardMaterial;
    ["Opaque(185,185,185).001"]: THREE.MeshStandardMaterial;
    ["Opaque(37,36,36).001"]: THREE.MeshStandardMaterial;
    ["Opaque(176,169,152).001"]: THREE.MeshStandardMaterial;
    ["Opaque(41,41,41).001"]: THREE.MeshStandardMaterial;
    ["Opaque(192,192,192).001"]: THREE.MeshStandardMaterial;
    ["Carbon Fiber - Plain.001"]: THREE.MeshStandardMaterial;
    ["Opaque(188,80,47).001"]: THREE.MeshStandardMaterial;
    ["Opaque(20,28,51).001"]: THREE.MeshStandardMaterial;
    ["Opaque(190,188,186)"]: THREE.MeshStandardMaterial;
    ["Opaque(255,254,246).001"]: THREE.MeshStandardMaterial;
    ["Opaque(82,105,43).001"]: THREE.MeshStandardMaterial;
    ["Opaque(191,191,191)"]: THREE.MeshStandardMaterial;
    ["Opaque(244,244,244)"]: THREE.MeshStandardMaterial;
    ["Opaque(5,5,5)"]: THREE.MeshStandardMaterial;
    ["Opaque(128,128,128)"]: THREE.MeshStandardMaterial;
    ["Opaque(63,63,63)"]: THREE.MeshStandardMaterial;
    ["Opaque(173,173,173)"]: THREE.MeshStandardMaterial;
    Arbetshylla: THREE.MeshStandardMaterial;
    ["Arbetsbänk Skiva"]: THREE.MeshStandardMaterial;
    ["Leg.001"]: THREE.MeshStandardMaterial;
    ["Mat 01"]: THREE.MeshStandardMaterial;
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
    ["Screen.001"]: THREE.MeshStandardMaterial;
    ["Platine.001"]: THREE.MeshStandardMaterial;
  };
};

let propSpeed = 0.8;
let i = 1;
let interval: NodeJS.Timeout;

const newPropSpeed = (index: number) => {
  return 0.8 * Math.pow(0.9, index);
};

const Scene = ({
  setDialog,
  section,
}: {
  setDialog: Dispatch<SetStateAction<string | null>>;
  section: number;
}) => {
  const [video, setCurrentVideo] = useState(0);

  const propRef = useRef<THREE.Group[]>([]);
  const computerScreenRef = useRef<THREE.MeshBasicMaterial>(null);

  const { nodes, materials } = useGLTF(
    "/models/PortfolioScene.glb"
  ) as GLTFResult;

  const loginVideoTexture = useVideoTexture("/textures/loginScreen.mp4", {
    loop: false,
    muted: true,
    start: video == 1,
  });
  const schematicTexture = useVideoTexture("/textures/kicadSchematic.mp4", {
    loop: false,
    muted: true,
    start: video == 2,
  });
  const pcbMenuTexture = useTexture("/textures/kicadPCBMenu.jpg");

  const oscilloscopeTexture = useTexture("/textures/oscilloscopeScreen.jpg");

  oscilloscopeTexture.magFilter = THREE.NearestFilter;

  useFrame(() => {
    if (propRef.current.length == 0) return;

    propRef.current.forEach((prop, i) => {
      // Drone's props spin two CW and two CCW
      if (i == 3) {
        // Prop #3 (i=2) is already rotating the other way. Therefore I only need to spin prop 4 in the other direction
        prop.rotation.y += propSpeed;
      } else {
        prop.rotation.y -= propSpeed;
      }
    });
  });

  useEffect(() => {
    if (!computerScreenRef.current) return;

    if (section == 1) {
      interval = setInterval(() => {
        if (propSpeed < 0.05) {
          clearInterval(interval);
          propSpeed = 0;
        } else {
          propSpeed = newPropSpeed(i);
          i++;
        }
      }, 1000);

      setDialog(
        "It's about time you started. I was losing faith in you. Anyways welcome to my portfolio. My name is Adam Turaj. Lets login, boot up Kicad and get going!"
      );
    } else if (section == 2) {
      setDialog("");

      setCurrentVideo(1);

      setTimeout(() => {
        // TODO: Split this up
        setDialog(
          "Give me one second to login to my computer and...Welcome to Kicad, this is where I do my designing! Here I am working on a simple microcontroller. Lets speed this up a bit...Here we go, the final schematic! Now the important time, actually design the PCB! Click anywhere to skip to this."
        );

        setTimeout(() => {
          if (computerScreenRef.current) {
            computerScreenRef.current.map = schematicTexture;
            setCurrentVideo(2);
          }
        }, 4400);
      }, 100);
    } else if (section == 3) {
      setDialog(
        "Here is the final PCB design. Click it to ship it off the manufacturer and solder the components on."
      );
      computerScreenRef.current.map = pcbMenuTexture;
    }
  }, [section, computerScreenRef]);

  return (
    <>
      <CuttingMat />
      <group dispose={null} scale={[50, 50, 50]}>
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

        {/* Drone */}
        <group position={[-0.228, 0, 0.238]} scale={0.018}>
          {/* ESC */}
          <group
            position={[-0.212, 0.55, -0.318]}
            rotation={[0, Math.PI / 4, -Math.PI]}
          >
            <mesh
              geometry={nodes.ESC_PCB_1.geometry}
              material={materials["Opaque(255,255,255).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_2.geometry}
              material={materials["Plastic - Matte (Black).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_3.geometry}
              material={materials["Opaque(243,203,124).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_4.geometry}
              material={materials["Opaque(160,160,160).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_5.geometry}
              material={materials["Opaque(255,215,0).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_6.geometry}
              material={materials["ABS (White).001"]}
            />
            <mesh
              geometry={nodes.ESC_PCB_7.geometry}
              material={materials["Copper - Raw.001"]}
            />
          </group>

          {/* FCU */}
          <group position={[10.493, 1.162, -16.029]} rotation={[0, -1.571, 0]}>
            <mesh
              geometry={nodes.FCU_PCB_1.geometry}
              material={materials["Opaque(255,255,255).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_2.geometry}
              material={materials["Opaque(65,195,130).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_3.geometry}
              material={materials["Opaque(250,235,214).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_4.geometry}
              material={materials["Opaque(51,153,102).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_5.geometry}
              material={materials["Opaque(210,209,199).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_6.geometry}
              material={materials["Opaque(97,69,55).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_7.geometry}
              material={materials["Opaque(204,204,204).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_8.geometry}
              material={materials["Opaque(228,227,207).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_9.geometry}
              material={materials["Opaque(21,22,24).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_10.geometry}
              material={materials["Opaque(247,224,153).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_11.geometry}
              material={materials["Opaque(38,37,37).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_12.geometry}
              material={materials["Opaque(219,188,126).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_13.geometry}
              material={materials["Opaque(87,173,113).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_14.geometry}
              material={materials["Opaque(70,70,70).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_15.geometry}
              material={materials["Opaque(255,245,209).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_16.geometry}
              material={materials["Opaque(150,150,150).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_17.geometry}
              material={materials["Opaque(50,50,50).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_18.geometry}
              material={materials["Opaque(185,185,185).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_19.geometry}
              material={materials["Opaque(37,36,36).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_20.geometry}
              material={materials["Opaque(176,169,152).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_21.geometry}
              material={materials["Opaque(41,41,41).001"]}
            />
            <mesh
              geometry={nodes.FCU_PCB_22.geometry}
              material={materials["Opaque(192,192,192).001"]}
            />
          </group>

          {/* Frame */}
          <mesh
            geometry={nodes.Frame.geometry}
            material={materials["Carbon Fiber - Plain.001"]}
          />

          {/* Motor 1 */}
          <group
            position={[7.983, 6.69, 4.902]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Motor_1_1.geometry}
              material={materials["Opaque(188,80,47).001"]}
            />
            <mesh
              geometry={nodes.Motor_1_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
            <mesh
              geometry={nodes.Motor_1_3.geometry}
              material={materials["Opaque(190,188,186)"]}
            />
            <mesh
              geometry={nodes.Motor_1_4.geometry}
              material={materials["Opaque(255,254,246).001"]}
            />
            <mesh
              geometry={nodes.Motor_1_5.geometry}
              material={materials["Opaque(82,105,43).001"]}
            />
            <mesh
              geometry={nodes.Motor_1_6.geometry}
              material={materials["Opaque(191,191,191)"]}
            />
          </group>

          {/* Motor 2 */}
          <group
            position={[-7.983, 6.69, 4.902]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Motor_2_1.geometry}
              material={materials["Opaque(188,80,47).001"]}
            />
            <mesh
              geometry={nodes.Motor_2_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
            <mesh
              geometry={nodes.Motor_2_3.geometry}
              material={materials["Opaque(190,188,186)"]}
            />
            <mesh
              geometry={nodes.Motor_2_4.geometry}
              material={materials["Opaque(255,254,246).001"]}
            />
            <mesh
              geometry={nodes.Motor_2_5.geometry}
              material={materials["Opaque(82,105,43).001"]}
            />
            <mesh
              geometry={nodes.Motor_2_6.geometry}
              material={materials["Opaque(191,191,191)"]}
            />
          </group>

          {/* Motor 3 */}
          <group
            position={[7.983, 6.69, -4.902]}
            rotation={[-Math.PI, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Motor_3_1.geometry}
              material={materials["Opaque(188,80,47).001"]}
            />
            <mesh
              geometry={nodes.Motor_3_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
            <mesh
              geometry={nodes.Motor_3_3.geometry}
              material={materials["Opaque(190,188,186)"]}
            />
            <mesh
              geometry={nodes.Motor_3_4.geometry}
              material={materials["Opaque(255,254,246).001"]}
            />
            <mesh
              geometry={nodes.Motor_3_5.geometry}
              material={materials["Opaque(82,105,43).001"]}
            />
            <mesh
              geometry={nodes.Motor_3_6.geometry}
              material={materials["Opaque(191,191,191)"]}
            />
          </group>

          {/* Motor 4 */}
          <group
            position={[-7.983, 6.69, -4.902]}
            rotation={[Math.PI, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes.Motor_4_1.geometry}
              material={materials["Opaque(188,80,47).001"]}
            />
            <mesh
              geometry={nodes.Motor_4_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
            <mesh
              geometry={nodes.Motor_4_3.geometry}
              material={materials["Opaque(190,188,186)"]}
            />
            <mesh
              geometry={nodes.Motor_4_4.geometry}
              material={materials["Opaque(255,254,246).001"]}
            />
            <mesh
              geometry={nodes.Motor_4_5.geometry}
              material={materials["Opaque(82,105,43).001"]}
            />
            <mesh
              geometry={nodes.Motor_4_6.geometry}
              material={materials["Opaque(191,191,191)"]}
            />
          </group>

          {/* Prop 1 */}
          <group
            position={[7.983, 1.78, 7.166]}
            ref={(el) => {
              if (el) {
                propRef.current[0] = el;
              }
            }}
          >
            <mesh
              geometry={nodes.Prop_1_1.geometry}
              material={materials["Opaque(65,195,130).001"]}
            />
            <mesh
              geometry={nodes.Prop_1_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
          </group>

          {/* Prop 2 */}
          <group
            position={[-7.983, 1.78, 7.166]}
            rotation={[0, 0, -Math.PI]}
            ref={(el) => {
              if (el) {
                propRef.current[1] = el;
              }
            }}
          >
            <mesh
              geometry={nodes.Prop_2_1.geometry}
              material={materials["Opaque(65,195,130).001"]}
            />
            <mesh
              geometry={nodes.Prop_2_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
          </group>

          {/* Prop 3 */}
          <group
            position={[7.983, 1.78, -7.166]}
            rotation={[Math.PI, 0, 0]}
            ref={(el) => {
              if (el) {
                propRef.current[2] = el;
              }
            }}
          >
            <mesh
              geometry={nodes.Prop_3_1.geometry}
              material={materials["Opaque(65,195,130).001"]}
            />
            <mesh
              geometry={nodes.Prop_3_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
          </group>

          {/* Prop 4 */}
          <group
            position={[-7.983, 1.78, -7.166]}
            rotation={[0, 0, -Math.PI]}
            ref={(el) => {
              if (el) {
                propRef.current[3] = el;
              }
            }}
          >
            <mesh
              geometry={nodes.Prop_3_1.geometry}
              material={materials["Opaque(65,195,130).001"]}
            />
            <mesh
              geometry={nodes.Prop_3_2.geometry}
              material={materials["Opaque(20,28,51).001"]}
            />
          </group>

          {/* Screw 1 */}
          <mesh
            geometry={nodes.Screw.geometry}
            material={materials["Opaque(160,160,160).001"]}
            position={[1.561, 1.163, -1.549]}
            rotation={[0, -1.571, 0]}
          />

          {/* Screw 2 */}
          <mesh
            geometry={nodes.Screw001.geometry}
            material={materials["Opaque(160,160,160).001"]}
            position={[1.561, 1.163, 1.501]}
            rotation={[0, -1.571, 0]}
          />

          {/* Screw 3 */}
          <mesh
            geometry={nodes.Screw002.geometry}
            material={materials["Opaque(160,160,160).001"]}
            position={[-1.489, 1.163, 1.501]}
            rotation={[0, -1.571, 0]}
          />

          {/* Screw 4 */}
          <mesh
            geometry={nodes.Screw003.geometry}
            material={materials["Opaque(160,160,160).001"]}
            position={[-1.489, 1.163, -1.549]}
            rotation={[0, -1.571, 0]}
          />

          {/* Spacers */}
          <mesh
            geometry={nodes.Spacers.geometry}
            material={materials["Opaque(255,215,0).001"]}
          />
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
            <meshBasicMaterial
              map={loginVideoTexture}
              toneMapped={false}
              ref={computerScreenRef}
            />
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
    </>
  );
};

useGLTF.preload("/models/PortfolioScene.glb");

export default Scene;
