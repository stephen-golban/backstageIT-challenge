import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Box } from '@miista/components/common';
import { useFilterContext } from '../context';

const FilterPrice: React.FC = () => {
  const { setState, state } = useFilterContext();

  return (
    <Box textTransform="uppercase" marginTop={15}>
      <Box width={80}>
        <span>price</span>
      </Box>
      <Box flex={1}>
        <Slider
          range
          step={50}
          marks={{
            1: <strong>&euro; 1</strong>,
            200: <div>&euro; 200</div>,
            400: <div>&euro; 400</div>,
            600: <div>&euro; 600</div>,
            800: <div>&euro; 800</div>,
            1000: <strong>&euro; 1000</strong>,
          }}
          value={state.price}
          allowCross={false}
          defaultValue={[100, 900]}
          min={1}
          max={1000}
          onChange={(value) => setState('price', value as number[])}
        />
      </Box>
    </Box>
  );
};

export default FilterPrice;
