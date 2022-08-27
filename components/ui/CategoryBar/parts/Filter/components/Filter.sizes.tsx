import React from 'react';

import { Box } from '@miista/components/common';

const FilterSizes = () => {
  const sizes = [34, 35, 36, 38, 39, 40, 41, 42];

  return (
    <Box textTransform="uppercase" marginTop={15}>
      <span>size</span>
      <Box width="auto" marginLeft={30} alignItems="center">
        {sizes.map((size) => (
          <Box
            key={`filter-sizes-${size}`}
            width="auto"
            color="black"
            cursor="pointer"
            className="mx-2 hover:underline"
          >
            {size}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilterSizes;
