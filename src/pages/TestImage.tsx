
import React from 'react';

const TestImage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl mb-10">Image 3</h1>
      <img src="/image-3.png" alt="image-3" className="max-w-full" />
      <h1 className="text-2xl my-10">Image 2</h1>
      <img src="/image-2.png" alt="image-2" className="max-w-full" />
      <h1 className="text-2xl my-10">Image 1</h1>
      <img src="/image-1.png" alt="image-1" className="max-w-full" />
    </div>
  );
};

export default TestImage;
