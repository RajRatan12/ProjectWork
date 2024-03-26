 
import React, { useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [imageFile, setImageFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [imageClassified, setImageClassified] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setError(null); // Clear any previous errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      setError('Please select an image.'); // Image validation
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const config = {
        onUploadProgress: progressEvent => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      };
      const response = await axios.post('http://localhost:9000/classify', formData, config);
      setClassificationResult(response.data);
      setError(null);
      setImageClassified(true);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to classify image. Please try again.');
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setClassificationResult(null);
    setImageClassified(false);
    setShowConfirmationModal(false);
    setError(null);
  };

  const downloadResult = () => {
    if (classificationResult) {
      const resultText = `Classification Result: ${classificationResult.label}`;
      const blob = new Blob([resultText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'classification_result.txt');
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-200 to-pink-200'>
      <div className='max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-6 text-center text-purple-800'>Image Classification Service</h1>
        <input type="file" onChange={handleImageChange} className='border border-gray-300 p-2 rounded-md mb-4' />
        {imagePreview && <img src={imagePreview} alt="Preview" className="mb-4 max-w-full" />}
        <div className="relative mb-4">
          <button onClick={handleSubmit} disabled={!imageFile || loading} className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-md ${(!imageFile || loading) && 'opacity-50 cursor-not-allowed'}`}>
            {loading ? 'Classifying...' : 'Classify Image'}
          </button>
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-25 rounded-md"></div>
              <div className="z-10 text-white">Uploading: {uploadProgress}%</div>
            </div>
          )}
        </div>
        {error && (
          <div className='bg-red-100 p-4 rounded-md mt-4'>
            <p className='text-lg font-semibold text-red-800'>{error}</p>
          </div>
        )}
        {classificationResult && (
          <div className='bg-green-100 p-4 rounded-md mt-4'>
            <p className='text-lg font-semibold text-green-800'>Classification Result:</p>
            <p className='mt-2 text-green-700'>The image is classified as: {classificationResult.label}</p>
            {classificationResult.probability && (
              <p className='mt-2 text-gray-700'>Probability: {Math.round(classificationResult.probability * 100)}%</p>
            )}
            {classificationResult.dimensions && (
              <p className='mt-2 text-gray-700'>Dimensions: {classificationResult.dimensions.width} x {classificationResult.dimensions.height}</p>
            )}
            <button onClick={downloadResult} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md mt-2">
              Download Result
            </button>
          </div>
        )}
        {imageClassified && (
          <button onClick={() => setShowConfirmationModal(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md mt-4">
            Clear Image
          </button>
        )}
        {showConfirmationModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Clear Image</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to clear the image? This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                   <button onClick={clearImage} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                     Clear
                   </button>
                   <button onClick={() => setShowConfirmationModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                     Cancel
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;


 
