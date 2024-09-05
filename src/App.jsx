import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import "./style.css";

function App() {
  return (
    <div className="w-full h-screen ">
      <div className="absolute flex flex-col items-center text-white top-20 left-1/2 -translate-x-1/2 font-['Helvic_Now_Display']  ">
        <h3 className="text-7xl tracking-tighter font-[700]">macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum sequi vel quasi?</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;

