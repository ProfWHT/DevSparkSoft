import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const DEFAULT_PLACEHOLDER = 'https://via.placeholder.com/400x500?text=Image+Not+Found';

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(DEFAULT_PLACEHOLDER);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
