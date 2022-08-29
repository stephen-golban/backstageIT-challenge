import React from 'react';

import Box from '../Box/Box';
import { CardImage, CardTitle } from './parts';

interface ICardProps extends React.PropsWithChildren {
  isLoading?: boolean;
}

const Card: React.FC<ICardProps> = ({ children, isLoading }) => {
  return (
    <Box width={340} height={440} flexDirection="column" opacity={isLoading ? 0.5 : 1} position="relative">
      {isLoading && <Box height="100%" position="absolute" zIndex={10} opacity={0.5} backgroundColor="white" />}
      {children}
    </Box>
  );
};

const CardNameSpace = Object.assign(Card, { Title: CardTitle, Image: CardImage });

export default CardNameSpace;
