import React from 'react';

import { Box } from '@miista/components/common';

const FilterStyles = () => {
  const styles = ['leather', 'non-leather', 'nubuck'];

  return (
    <Box textTransform="uppercase" marginTop={15}>
      <span>style</span>
      <Box marginLeft={30} alignItems="center">
        {styles.map((styl) => (
          <Box
            key={`filter-styles-${styl}`}
            width="auto"
            color="black"
            cursor="pointer"
            className="mx-2 hover:underline"
          >
            {styl}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilterStyles;
