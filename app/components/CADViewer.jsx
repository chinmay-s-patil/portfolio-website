"use client";
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

function Model({ url }) {
  // Use useLoader with a callback to set the DRACOLoader on the GLTFLoader.
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    // Set the path to where your Draco decoder files are located.
    // This could be a local folder in your public directory or a CDN.
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} />;
}

export default function CADViewer({ modelUrl }) {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 100] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Center>
        <Model url={modelUrl} />
      </Center>
      <OrbitControls />
    </Canvas>
  );
}
