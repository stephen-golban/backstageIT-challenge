import { Box } from '@miista/components/common';
import React from 'react';

const FilterColors = () => {
  const colors = ['black', '#b8844c', '#780c2c', '#c84c4c', '#483424', '#f0c4d4'];

  return (
    <Box alignItems="flex-start" textTransform="uppercase">
      <span>colour</span>
      <Box width="auto" marginLeft={30} alignItems="center">
        {colors.map((color) => (
          <Box
            key={`filter-colors-${color}`}
            className="mx-1 hover:opacity-75"
            width={25}
            height={25}
            borderRadius={999}
            backgroundColor={color}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FilterColors;
