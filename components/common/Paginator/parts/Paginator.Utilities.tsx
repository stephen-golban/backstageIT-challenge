import React from 'react';
import Box from '../../Box/Box';

const PaginatorUtilities: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Box width="auto" justifyContent="center" alignItems="center">
        {children}
      </Box>
    </Box>
  );
};

export default PaginatorUtilities;
