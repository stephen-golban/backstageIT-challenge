import React from 'react';

import { useFilterContext } from '../../context';

import FilterColor from './Filter.color';
import { Box } from '@miista/components/common';

const COLORS = [
  'green',
  'white',
  'brown',
  'orange',
  'black',
  'natural',
  'yellow',
  'red',
  'purple',
  'blue',
  'gold',
  'silver',
  'grey',
];

const FilterColors: React.FC = () => {
  const { setState, state } = useFilterContext();

  const handleChange = (val: string) => {
    if (state.colors.includes(val)) {
      const filtered = state.colors.filter((item) => item !== val);
      return setState('colors', filtered);
    }

    return setState('colors', [...new Set([...state.colors, val])]);
  };

  return (
    <Box textTransform="uppercase" marginTop={15}>
      <span>colors</span>
      <Box width="auto" marginLeft={30} alignItems="center" flexWrap="wrap">
        {COLORS.map((color, index) => {
          return (
            <FilterColor
              key={color + index}
              color={color}
              onChange={handleChange}
              defaultChecked={state.colors.includes(color)}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default FilterColors;
