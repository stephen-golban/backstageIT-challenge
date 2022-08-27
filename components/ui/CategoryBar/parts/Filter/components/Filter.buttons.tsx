import React from 'react';
import * as S from '../Filter.styles';

import { Box } from '@miista/components/common';
import { CloseIcon } from '@miista/components/icons';

interface IFilterButtonsProps {
  onClickClose: () => void;
  onClickClear?: () => void;
}

const FilterButtons: React.FC<IFilterButtonsProps> = ({ onClickClear = () => {}, onClickClose }) => {
  return (
    <Box justifyContent="flex-end" alignItems="center">
      <S.Button onClick={onClickClear}>
        <Box width="auto" color="black" textTransform="uppercase">
          clear filter
        </Box>
      </S.Button>
      <S.Button onClick={onClickClose} style={{ marginLeft: 20 }}>
        <CloseIcon />
      </S.Button>
    </Box>
  );
};

export default FilterButtons;
