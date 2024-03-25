import React, { useState } from 'react';
import axios from 'axios';

const Services = () => {
 const [imageFile, setImageFile] = useState(null);
 const [classificationResult, setClassificationResult] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleImageChange = (event) => {
  setImageFile(event.target.files[0]);
 };

 const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);

  const formData = new FormData();
  formData.append('image', imageFile);

  try {
   const response = await axios.post('http://localhost:9000/classify', formData);

   setClassificationResult(response.data);
  } catch (error) {
   console.error('Error:', error);
   // Handle error, display a message to the user
  } finally {
   setLoading(false);
  }
 };

 return (
  <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-200 to-pink-200'>
   <div className='max-w-md p-8 bg-white rounded-lg shadow-lg'>
    <h1 className='text-3xl font-bold mb-6 text-center text-purple-800'>Image Classification Service</h1>
    <input type="file" onChange={handleImageChange} className='border border-gray-300 p-2 rounded-md mb-4' />
    <button onClick={handleSubmit} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-md'>
     {loading ? 'Classifying...' : 'Classify Image'}
    </button>
    {classificationResult && (
     <div className='bg-yellow-100 p-4 rounded-md mt-4'>
      <p className='text-lg font-semibold text-yellow-800'>Classification Result:</p>
      <p className='mt-2 text-yellow-700'>The image is classified as: {classificationResult.label}</p>
     </div>
    )}
   </div>
  </div>
 );
};

export default Services;