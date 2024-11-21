import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";

// Preload the GLTF model
useGLTF.preload("/robot_playground.glb");

export const MovingRobo = () => {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  
  // To keep track of the rotation state and dragging
  const [dragging, setDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  // Play animation on load
  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play();
    }
  }, [actions]);

  // Handle mouse drag for manual rotation
  const onMouseDown = (event) => {
    setDragging(true);
    setLastX(event.clientX); 
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onMouseMove = (event) => {
    if (!dragging) return;
    const deltaX = event.clientX - lastX; 
    setLastX(event.clientX); 
    if (group.current) {
      group.current.rotation.y += deltaX * 0.04; 
    }
  };

  useEffect(() => {
    // Add event listeners to handle drag events
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [dragging, lastX]);

  return (
    <>
      {/* Group wrapping the robot model */}
      <group ref={group}>
        {/* Render the 3D model */}
        <primitive object={scene} scale={2} />
      </group>

      {/* OrbitControls for camera manipulation */}
      <OrbitControls />
    </>
  );
};

export default MovingRobo;
