"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Gavel() {
  const { scene } = useGLTF("/models/scene.gltf");
  return <primitive object={scene} scale={0.7} rotation={[0.3, Math.PI / 4, 0]} position={[0, -0.5, 0]} />;
}

export function GavelModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 6], fov: 60}}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Gavel />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={2} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
