import React from "react";
import DMSToDDConverter from "./DMSToDDConverter";
import DDToDMSConverter from "./DDToDMSConverter";

const ConversionForm = () => {
  return (
    <div className="conversion-form">
      <h2>Konversi Koordinat</h2>
      <DMSToDDConverter />
      <DDToDMSConverter />
    </div>
  );
};

export default ConversionForm;
