import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(); // Membuat referensi untuk elemen div peta
    this.map = null; // Variabel untuk menyimpan objek peta
  }

  componentDidMount() {
    // Membuat peta OpenLayers saat komponen dimuat
    this.map = new Map({
      target: this.mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  componentWillUnmount() {
    // Membersihkan peta saat komponen dibongkar
    if (this.map) {
      this.map.setTarget(null);
      this.map = null;
    }
  }

  render() {
    return (
      <div ref={this.mapRef} style={{ width: "100%", height: "1000px" }}></div>
    );
  }
}

export default MapComponent;
