import React, { useState } from 'react';
import DMSToDDConverter from '../form/DMSToDDConverter';
import DDToDMSConverter from '../form/DDToDMSConverter';

const ConversionForm = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('DMS to DD');

  return (
    <div className="conversion-form bg-white p-4 rounded-lg shadow-md flex flex-col items-center border-blue-500">
      <h2 className="text-xl font-bold mb-4">Konversi Koordinat</h2>
      <div className="flex mb-4">
        <button
          className={`mr-4 py-2 px-4 border border-gray-400 rounded-md ${activeTab === 'DMS to DD' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('DMS to DD')}
        >
          DMS to DD
        </button>
        <button
          className={`py-2 px-4 border border-gray-400 rounded-md ${activeTab === 'DD to DMS' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('DD to DMS')}
        >
          DD to DMS
        </button>
      </div>
      <div className="flex justify-center">
        {activeTab === 'DMS to DD' ? <DMSToDDConverter /> : <DDToDMSConverter />}
      </div>
      {/* Tombol tutup form */}
      <button className="mt-4 py-2 px-4 bg-gray-700 text-white rounded-md" onClick={onClose}>
        Tutup
      </button>
    </div>
  );
};

export default ConversionForm;
