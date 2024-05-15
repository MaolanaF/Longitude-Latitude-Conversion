import React, { useState } from 'react';
import DMSToDDConverter from '../form/DMSToDDConverter';
import DDToDMSConverter from '../form/DDToDMSConverter';
import CloseIcon from '@mui/icons-material/Close';

const ConversionForm = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('DMS to DD');

  return (
    <div className="bg-emerald-50 p-4 rounded-lg shadow-md max-w-md mx-auto mt-8 flex flex-col items-center relative">
      <button className="absolute top-2 right-2" onClick={onClose}>
        <CloseIcon />
      </button>
      
      <h2 className="text-xl font-bold mb-4">Konversi Koordinat</h2>
      <div className="flex mb-4">
        <button
          className={`mr-4 py-2 px-4 border border-green-950 rounded-md ${activeTab === 'DMS to DD' ? 'bg-emerald-400' : ''}`}
          onClick={() => setActiveTab('DMS to DD')}
        >
          DMS to DD
        </button>
        <button
          className={`py-2 px-4 border border-green-950 border-opacity-100 rounded-md ${activeTab === 'DD to DMS' ? 'bg-emerald-400' : ''}`}
          onClick={() => setActiveTab('DD to DMS')}
        >
          DD to DMS
        </button>
      </div>

      <div className="justify-center">
        {activeTab === 'DMS to DD' ? <DMSToDDConverter /> : <DDToDMSConverter />}
      </div>
    </div>
  );
};

export default ConversionForm;
