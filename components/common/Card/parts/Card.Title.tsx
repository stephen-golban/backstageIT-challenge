import React from 'react';

import Box from '../../Box/Box';

const CardTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box fontWeight="normal" color="#1C1C1C" wordBreak="break-word" width="auto">
      {children}
    </Box>
  );
};

export default CardTitle;
