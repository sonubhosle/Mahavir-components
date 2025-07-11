// src/components/Rotate360Viewer.tsx
import React, { useRef, useState } from 'react';

interface Rotate360ViewerProps {
  images: string[];
  className?: string;
  height?: string;
}

const Rotate360Viewer: React.FC<Rotate360ViewerProps> = ({ images, className = '', height = '400px' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = mouseX / rect.width;
    const newIndex = Math.floor(percentage * images.length);

    setIndex(newIndex);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`overflow-hidden relative cursor-pointer ${className} h-full w-full`}
      
    >
      {/* Main Rotating Image */}
      <img
        src={images[index]}
        alt={`Frame ${index}`}
        className="w-full h-full object-cover transition-opacity duration-75"
        draggable={false}
      />

      {/* SVG Arc Overlay at Bottom Center */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
  <svg width="300" height="80" viewBox="0 0 300 50" fill="none">
    <path
      d="M30 10 Q75 50 140 50"
      stroke="#aaa"
      strokeWidth="1.7"
      strokeDasharray="12 10 12 10 12 "
      fill="none"
    />
    <path
      d="M160 50 Q225 50 270 10"
      stroke="#aaa"
      strokeWidth="1.7"
       strokeDasharray="12 10 12 10 12 "
      fill="none"
    />
    <text x="125" y="57" fontSize="20" fill="#000">◄</text>
    <text x="145" y="56" fontSize="20" fill="#000">●</text>
    <text x="158" y="57" fontSize="20" fill="#000">►</text>
  </svg>
</div>




    </div>

  );
};

export default Rotate360Viewer;
