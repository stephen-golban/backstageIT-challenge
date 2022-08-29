import React from 'react';

import Box from '../../Box/Box';

// Couldn't use the next/image component because it gives `TypeError: undefined is not iterable`;

interface ICardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CardImage: React.FC<ICardImageProps> = (props) => {
  const { width = 340, height = 340, alt } = props;

  return (
    <Box width={width} height={height} position="relative">
      <picture style={{ width, height }}>
        <source srcSet={props.src} type="image/webp" />
        <img width={width} height={height} alt={alt} placeholder="blur" {...props} />
      </picture>
    </Box>
  );
};

export default CardImage;
