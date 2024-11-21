import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import MovingVehicle from './MovingVehicle';  // import the moving vehicle component
import Loader from "./modal";
// import Loader from './Loader'; // import loader for model loading

const Scene = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      style={{ position: "relative", height: "100vh" }}
    >
      <directionalLight position={[-5, -5, -5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={2}>
        <mesh rotation={[0.5, 0.5, 0]}>
          
          <MovingVehicle />
        </mesh>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
