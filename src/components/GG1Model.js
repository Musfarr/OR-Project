import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import videoFile from '../assests/videos/abstract.webm';

const GG1Model = () => {
  const [arrivalMean, setArrivalMean] = useState(0);
  const [arrivalDistribution, setArrivalDistribution] = useState('');
  const [serviceDistribution, setServiceDistribution] = useState('');
  const [serviceMean, setServiceMean] = useState(0);

  const handleSimulate = () => {
    // Pass arrivalMean, arrivalDistribution, serviceDistribution, and serviceMean as query parameters in the link
    const searchParams = new URLSearchParams({
      arrivalMean,
      arrivalDistribution,
      serviceDistribution,
      serviceMean
    });

    // Generate the link URL with query parameters
    const linkURL = `/simulationgg1?${searchParams.toString()}`;

    // Navigate to the simulation page using the link
    window.location.href = linkURL;
  };

  return (
    <div className="flex justify-center items-center h-screen z-0">
        <video
        src={videoFile} // Replace with the path to your animation video file
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="w-1/2 bg-gray-200 rounded-xl shadow-xl p-8 z-10">
        <div className="mb-8">
          <h2 className="text-3xl text-center text-red-800 font-bold">GG1 Model Simulation</h2>
          <p className="text-sm text-center text-gray-500 italic">Enter arrival mean, select the arrival distribution, select the service distribution, and provide the service mean to simulate the GG1 model:</p>
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="arrivalMeanInput">
            Arrival Mean:
          </label>
          <input
            id="arrivalMeanInput"
            type="number"
            className="w-96 p-2 border rounded-xl border-gray-400 text-center mx-56"
            value={arrivalMean}
            onChange={(e) => setArrivalMean(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="arrivalDistributionSelect">
            Arrival Distribution:
          </label>
          <select
            id="arrivalDistributionSelect"
            className="w-96 p-2 border rounded-xl border-gray-400 mx-56"
            value={arrivalDistribution}
            onChange={(e) => setArrivalDistribution(e.target.value)}
          >
            <option value="">Select a distribution</option>
            {/* Add options for different arrival distributions */}
            <option value="">Select a distribution</option>
            <option value="gamma">Gamma Distribution</option>
            <option value="normal">Normal Distribution</option>
            <option value="uniform">Uniform Distribution</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceDistributionSelect">
            Service Distribution:
          </label>
          <select
            id="serviceDistributionSelect"
            className="w-96 p-2 border rounded-xl border-gray-400 mx-56"
            value={serviceDistribution}
            onChange={(e) => setServiceDistribution(e.target.value)}
          >
            <option value="">Select a distribution</option>
            <option value="gamma">Gamma Distribution</option>
            <option value="normal">Normal Distribution</option>
            <option value="uniform">Uniform Distribution</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Service Mean:
          </label>
          <input
            id="serviceMeanInput"
            type="number"
            className="w-96 p-2 border rounded-xl border-gray-400 text-center mx-56"
            value={serviceMean}
            onChange={(e) => setServiceMean(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <Link
            to="/simulationgg1"
            onClick={handleSimulate}
            className="w-96 bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-56"
          >
            Simulate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GG1Model;
