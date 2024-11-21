import  { useRef, useEffect } from "react";
import { useGLTF, useAnimations,OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

export const MovingVehicle = () => {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  // Play animation on load
  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  // Continuous rotation animation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Rotate the model around the Y-axis
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2} />
    </group>
  );
};

export default MovingVehicle;
