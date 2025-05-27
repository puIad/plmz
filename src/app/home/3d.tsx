"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/3d.glb");
  // Increase the scale of the model directly
  return <primitive object={gltf.scene} scale={1.35} />; // Was 1.2, now 1.35 (or try 1.4, 1.5)
};

const ModelViewer = () => {
  return (
    <>
      <style>
        {`
          .model-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }
        `}
      </style>

      <div className="model-container">
        {/* Option: Adjust camera FOV or Z position for a different "zoom" effect */}
        {/* e.g., <Canvas camera={{ position: [0, 1, 4.5], fov: 55 }}> */}
        <Canvas camera={{ position: [2, 3, 4], fov: 40 }}> {/* Current default */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 3, 10]} intensity={2} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </>
  );
};

export default ModelViewer;