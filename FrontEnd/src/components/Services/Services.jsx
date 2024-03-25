import React, { useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [imageFile, setImageFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      // Inside the handleSubmit function
      const response = await axios.post('http://localhost:9000/classify', formData); // Assuming Flask server is on localhost:8080

      setClassificationResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error, display a message to the user
    }
  };

  return (
    <div className='flex justify-center items-center p-12 '>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit} className='text-3xl border-4 rounded-b-lg border-gray-700 p-3'>Classify Image</button>
      {classificationResult && (
        <p>The image is classified as: {classificationResult.label}</p>
      )}
    </div>
  );
};

export default Services;