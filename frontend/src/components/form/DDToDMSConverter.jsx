import React, { useState } from 'react';

const DDToDMSConverter = () => {
  const [latitudeDD, setLatitudeDD] = useState('');
  const [longitudeDD, setLongitudeDD] = useState('');
  const [result, setResult] = useState(null);

  const convertDDtoDMS = (dd) => {
    let latitude = dd >= 0 ? 'N' : 'S';
    let longitude = dd >= 0 ? 'E' : 'W';

    dd = Math.abs(dd);

    let degrees = Math.floor(dd);
    let minutes = Math.floor((dd - degrees) * 60);
    let seconds = ((dd - degrees - minutes / 60) * 3600).toFixed(2);

    return `${degrees}° ${minutes}' ${seconds}" ${latitude}, ${longitude}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Latitude: ${convertDDtoDMS(latitudeDD)}, Longitude: ${convertDDtoDMS(longitudeDD)}`);
  };

  const handleAddToMaps = () => {
    // Logika untuk menambahkan hasil ke peta
  };
  
  return (
    <div>
      <div className='p-3 border-2 border-gray-700 rounded-xl space-y-2'>
        <div className='flex gap-2'>
          <div>
            <p className='text-sm font-bold'>"Coordinate DMS to DD" dan "Coordinate DD to DMS"</p>
          </div>
        </div>
      </div>

      <form className="space-y-4 my-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black">Latitude (DD)</label>
          <input
            type="text"
            value={latitudeDD}
            onChange={(e) => setLatitudeDD(e.target.value)}
            placeholder="e.g. 90.123456"
            className="mt-2 block w-full px-4 py-2 bg-white border border-gray-700 rounded-full ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition duration-300 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Longitude (DD)</label>
          <input
            type="text"
            value={longitudeDD}
            onChange={(e) => setLongitudeDD(e.target.value)}
            placeholder="e.g. 33.123456"
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

export default DDToDMSConverter;
