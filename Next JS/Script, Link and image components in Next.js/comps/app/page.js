'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "http://www.menucool.com/slider/prod/image-slider-1.jpg",
    "http://www.menucool.com/slider/prod/image-slider-2.jpg",
    "http://www.menucool.com/slider/prod/image-slider-3.jpg"
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(intervalId); // Cleanup
  }, [images.length]);

  return (
    <div className="slider overflow-hidden relative bg-red-500">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} className="w-full" src={src} alt={`Slider Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
