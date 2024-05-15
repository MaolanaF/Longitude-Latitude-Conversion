import React from "react";
import MapComponent from "./components/map/MapComponents";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen">
      <h1 className="font-mono text-2xl">My OpenLayers Map</h1>
      <MapComponent />
    </div>
  );
}

export default App;
