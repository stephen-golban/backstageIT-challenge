import React from 'react';

import { Box } from '@miista/components/common';

import { FilterButtons, FilterColors, FilterSizes, FilterStyles } from './components';

interface IFilterProps {
  open: boolean;
  onClose: () => void;
}

const Filter: React.FC<IFilterProps> = ({ onClose, open }) => {
  return (
    <Box width={540} padding={22} paddingLeft={60} flexDirection="column">
      <FilterButtons onClickClose={onClose} />
      <Box flexDirection="column" marginTop={20}>
        <FilterColors />
        <FilterSizes />
        <FilterStyles />
      </Box>
    </Box>
  );
};

export default Filter;
