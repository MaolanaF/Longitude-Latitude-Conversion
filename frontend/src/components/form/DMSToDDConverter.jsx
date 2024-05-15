import React, { useState } from 'react';
// import MapComponent from '../map/MapComponents';

const DMSToDDConverter = () => {
  const [latitudeDMS, setLatitudeDMS] = useState('');
  const [longitudeDMS, setLongitudeDMS] = useState('');
  const [result, setResult] = useState(null);
  

  const convertDMStoDD = (dms, direction) => {
    const cleanedDMS = cleanDMSInput(dms);
    const parts = cleanedDMS.split(/\s+/);
    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]) / 60;
    const seconds = parseFloat(parts[2]) / 3600;
    let dd = degrees + minutes + seconds;
    if (direction === 'S' || direction === 'W') {
      dd *= -1;
    }
    return dd;
  };

  const cleanDMSInput = (dms) => {
    return dms.replace(/[^\d\s.]+/g, '').trim();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const latitudeDD = convertDMStoDD(latitudeDMS, latitudeDMS.slice(-1));
    const longitudeDD = convertDMStoDD(longitudeDMS, longitudeDMS.slice(-1));
    setResult(`Latitude: ${latitudeDD.toFixed(6)}, Longitude: ${longitudeDD.toFixed(6)}`);
  };

  const formatDMS = (value) => {
    if (!value) return '';
    const parts = value.split(/\s+/);
    return `${parts[0] || ''}° ${parts[1] || ''}′ ${parts[2] || ''}″ ${parts[3] || ''}`;
  };

  const handleBlur = (e, setValue) => {
    setValue(formatDMS(e.target.value));
  };


  const handleAddToMaps = () => {
    // Logika untuk menambahkan hasil ke peta
  };


  return (
    <div>

      <div className='p-3 border-2 border-gray-700 rounded-xl space-y-2'>
        <div className='flex gap-2'>
          <div>
            <p className='text-sm font-bold'>"Coordinate DMS to DD" dan "Coordinate DD to DMS" </p>
          </div>
        </div>
      </div>

      <form className="space-y-4 my-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black">Latitude (DMS)</label>
          <input
            type="text"
            value={latitudeDMS}
            onChange={(e) => setLatitudeDMS(e.target.value)}
            onBlur={(e) => handleBlur(e, setLatitudeDMS)}
            placeholder="e.g. 90 0 0 N"
            className="mt-2 block w-full px-4 py-2 bg-white border border-gray-700 rounded-full ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition duration-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Longitude (DMS)</label>
          <input
            type="text"
            value={longitudeDMS}
            onChange={(e) => setLongitudeDMS(e.target.value)}
            onBlur={(e) => handleBlur(e, setLongitudeDMS)}
            placeholder="e.g. 33 13 48 E"
            className="mt-2 block w-full px-4 py-2 bg-white border border-gray-700 rounded-full ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition duration-300 outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-2 py-2 ml-40 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600"
        >
          Convert
        </button>
      </form>

      {result && (
        <div className="mt-4 p-3 border-2 border-gray-700 rounded-xl">
          <p className="text-sm font-bold">Result:</p>
          <p className="text-base text-emerald-900">{result}</p>
          <button className="mt-4 px-2 py-2 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 " onClick={handleAddToMaps}>
            Add to Maps
          </button>  
        </div>
      )}

      

    </div>
  );
};

export default DMSToDDConverter;
