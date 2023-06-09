import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Loader, useGLTF} from "@react-three/drei";


function Showroom(props) {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [modelIndex, setModelIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const modelFiles = [
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686161034/Green5_wtkz9b.glb",
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686161006/BlackShirt1_iaknmm.glb",
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686161520/BlueShirt_umphes.glb",
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686162994/GreenShort_tswmxa.glb",
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686162040/BlackShort1_l8cydx.glb",
    "https://res.cloudinary.com/dt4up0c48/image/upload/v1686164268/BlueShort1_myrmzp.glb",

  ];

  const models = useMemo(
    () =>
      modelFiles.map((file) => {
        return useGLTF(file);
      }),
    [modelFiles]
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [modelIndex, models.length]);

  useFrame((state) => {


    ref1.current.rotation.y = -1.5 +Math.sin(state.clock.elapsedTime / 2) * 0.65;
    ref2.current.rotation.y = .75 +Math.sin(state.clock.elapsedTime / 2) * 0.65;
    ref3.current.rotation.y = 2.5 +Math.sin(state.clock.elapsedTime / 2) * 0.65;
    ref4.current.rotation.y = -1.5 +Math.sin(state.clock.elapsedTime / 2) * 0.65;
    ref5.current.rotation.y = .75 +Math.sin(state.clock.elapsedTime / 2) * 0.65;
    ref6.current.rotation.y = 2.5 +Math.sin(state.clock.elapsedTime / 2) * 0.65;


    state.camera.fov = 50;
  });

  return (
    <group scale={2} position={[-1.8, -.91, -1.8]} dispose={null}>
      <primitive
        ref={ref1}
        {...props}
        object={models[2].scene}
        position={[-1.2, 0.9, 0]}
      />{" "}
      <primitive
        ref={ref4}
        {...props}
        object={models[5].scene}
        position={[-1.2, 0.5, 0]}
      />{" "}
      <primitive
        ref={ref2}
        {...props}
        object={models[1].scene}
        position={[1, 0.9, 1]}
      />{" "}
      <primitive
        ref={ref6}
        {...props}
        object={models[3].scene}
        position={[1, 0.5,-1]}
      />
      <primitive
        ref={ref3}
        {...props}
        object={models[0].scene}
        position={[1, 0.9, -1]}
      />
      <primitive
        ref={ref5}
        {...props}
        object={models[4].scene}
        position={[1, 0.5, 1]}

      />{" "}
    </group>
  );
}

export default Showroom;



// useGLTFImpl.preload( "/bandanaShirtGreen.glb")