import React from "react";
import MapComponent from "./components/map/MapComponents";
import FloatingButton from "./components/button/FloatingButton";
import "./App.css";


function App() {
  return (
    <div className="w-full h-screen">
      <h1 className="font-mono text-3xl text-black">WORLD MAP</h1>
      <div className="relative w-full h-[91%] bg-white p-1 rounded-xl">
        <MapComponent />
        <div className='absolute top-6 right-6'>
            <FloatingButton />
        </div>
      </div>
    </div>
  );
}

export default App;
