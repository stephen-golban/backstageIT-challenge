import React from 'react';

import { Box, Button } from '@miista/components/common';
import { CloseIcon } from '@miista/components/icons';

interface IFilterButtonsProps {
  onClickClose: () => void;
  onClickClear?: () => void;
}

const FilterButtons: React.FC<IFilterButtonsProps> = ({ onClickClear = () => {}, onClickClose }) => {
  return (
    <Box justifyContent="flex-end" alignItems="center">
      <Button onClick={onClickClear}>
        <Box width="auto" color="black" textTransform="uppercase">
          clear filter
        </Box>
      </Button>
      <Button onClick={onClickClose} marginLeft={20}>
        <CloseIcon />
      </Button>
    </Box>
  );
};

export default FilterButtons;
