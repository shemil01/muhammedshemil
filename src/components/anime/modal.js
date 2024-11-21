import React from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default Loader;
