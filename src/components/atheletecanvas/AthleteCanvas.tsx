import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function RunningAthlete() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/path/to/your/running-athlete.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate the model
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

function AthleteCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RunningAthlete />
    </Canvas>
  );
}

export default AthleteCanvas;
