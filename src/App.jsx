import { Canvas, useFrame, useThree } from "@react-three/fiber"
import "./App.css"
import { React, useRef, useState, useEffect } from "react"
import { OrbitControls, PerspectiveCamera, SpotLight, useHelper } from "@react-three/drei"
import { DirectionalLightHelper, Group } from "three"
import { Suspense } from "react"
import { Scene2 } from "./Scene_s_03"


const Scene = () => {

  const directionalLightRef = useRef()

  const cameraRef = useRef();
  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      const onChange = () => {
        // Log the camera position when the controls are interacted with
        console.log('Camera position:', camera.position);
        console.log('Camera FOV:', camera.fov);
      };

      controls.addEventListener('change', onChange);

      return () => {
        // Remove the event listener when the component unmounts
        controls.removeEventListener('change', onChange);
      };
    }
  }, [camera]);


  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return (
    <>

    < Scene2 />

      <OrbitControls />
      </>
  )
}


const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </>
  )
}

export default App;
