import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE for TypeScript types

function Box() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scaleDirection, setScaleDirection] = useState(1);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate the mesh
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Zoom in and out by adjusting the scale
      meshRef.current.scale.x += 0.01 * scaleDirection;
      meshRef.current.scale.y += 0.01 * scaleDirection;
      meshRef.current.scale.z += 0.01 * scaleDirection;

      // Reverse the scaling direction when a threshold is reached
      if (meshRef.current.scale.x > 2 || meshRef.current.scale.x < 1) {
        setScaleDirection(scaleDirection * -1);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

function BasicCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}

export default BasicCanvas;
