import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import FloatingButton from "../button/FloatingButton";

const MapComponent = () => {
  const mapRef = useRef(null);

  // Membuat peta saat komponen dipasang (mount)
  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 6,
        }),
      });

      // Pastikan elemen HTML memiliki dimensi yang cukup
      map.setTarget(mapRef.current);

      return () => {
        // Hapus target peta saat komponen dilepas
        map.setTarget(null);
      };
    }
  }, [mapRef]);

  return (
    <div className="map-container" style={{ position: "relative", width: "100%", height: "670px", border: "3px solid blue", marginTop:"20px", borderRadius: "5px" }}>
      {/* <FloatingButton  /> */}
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </div>
    // <div className="map-container relative w-full h-700 border-3 border-black mx-1">
    //   <FloatingButton className="absolute bottom-10 right-10" />
    //   <div ref={mapRef} className="w-full h-95" />
    // </div>
  );
};

export default MapComponent;
