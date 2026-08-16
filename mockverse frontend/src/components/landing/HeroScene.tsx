import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.25;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.35;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.25, 2]} />

      <meshStandardMaterial
        color="#6366f1"
        emissive="#312e81"
        emissiveIntensity={0.7}
        metalness={0.7}
        roughness={0.25}
        transparent
        opacity={0.85}
        wireframe
      />
    </mesh>
  );
};

const InnerOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y =
      -state.clock.elapsedTime * 0.2;

    meshRef.current.rotation.z =
      state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.7, 32, 32]} />

      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={1}
        metalness={0.4}
        roughness={0.2}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
};

const FloatingRing = ({
  rotation,
  scale,
}: {
  rotation: [number, number, number];
  scale: number;
}) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.x =
      rotation[0] + state.clock.elapsedTime * 0.15;

    ringRef.current.rotation.y =
      rotation[1] + state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh
      ref={ringRef}
      rotation={rotation}
      scale={scale}
    >
      <torusGeometry args={[1.7, 0.015, 16, 100]} />

      <meshBasicMaterial
        color="#a78bfa"
        transparent
        opacity={0.55}
      />
    </mesh>
  );
};

const Particles = () => {
  const particles = Array.from({ length: 100 }, (_, index) => {
    const angle = index * 2.39996;
    const radius = 2.5 + (index % 8) * 0.35;

    return [
      Math.cos(angle) * radius,
      ((index % 7) - 3) * 0.45,
      Math.sin(angle) * radius,
    ] as [number, number, number];
  });

  return (
    <>
      {particles.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.018, 8, 8]} />

          <meshBasicMaterial
            color={index % 3 === 0 ? "#f97316" : "#8b5cf6"}
          />
        </mesh>
      ))}
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 4]}
        intensity={12}
        color="#8b5cf6"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={8}
        color="#f97316"
      />

      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.5}
      >
        <FloatingOrb />
        <InnerOrb />

        <FloatingRing
          rotation={[0.5, 0.2, 0]}
          scale={1}
        />

        <FloatingRing
          rotation={[1.2, 0.8, 0.4]}
          scale={0.8}
        />
      </Float>

      <Particles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroScene;