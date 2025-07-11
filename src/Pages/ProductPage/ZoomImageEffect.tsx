import React, { useRef, useState } from 'react';

interface ZoomImageProps {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
  className?: string;
  scale?: number;
}

const ZoomImageEffect: React.FC<ZoomImageProps> = ({
  src,
  alt = '',
  className = '',
  scale = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    const image = e.currentTarget.querySelector('img') as HTMLImageElement;
    if (image) {
      image.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const image = containerRef.current?.querySelector('img');
    if (image) {
      image.style.transformOrigin = `center center`;
    }
    setIsHovered(false);
  };

  return (
    <section
      ref={containerRef}
      className={`overflow-hidden cursor-zoom-in ${className} w-full h-full`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <picture>
        <source srcSet={src} type="image/webp" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full  object-cover transition-transform duration-300 ease-out"
          style={{ transform: isHovered ? `scale(${scale})` : 'scale(1)' }}
        />

      </picture>
    </section>
  );
};

export default ZoomImageEffect;
