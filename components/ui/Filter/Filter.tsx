import React from 'react';

import { Box, Dropdown } from '@miista/components/common';
import { FilterButtons, FilterColors } from './parts';
import { FilterProvider, useFilterContext } from './context';
import FilterPrice from './parts/Filter.price';

interface IFilterProps {}

const Filter: React.FC<IFilterProps> = () => {
  const { resetState } = useFilterContext();

  return (
    <Dropdown
      renderTrigger={
        <Box width="auto" cursor="pointer" className="text-miista-gray uppercase">
          Filters
        </Box>
      }
    >
      {(dropdownUtils) => (
        <Box width={540} padding={22} paddingLeft={60} flexDirection="column">
          <FilterButtons onClickClose={dropdownUtils.close} onClickClear={resetState} />

          <Box flexDirection="column" marginTop={20}>
            <FilterColors />
            <FilterPrice />
          </Box>
        </Box>
      )}
    </Dropdown>
  );
};

const FilterNamespace = Object.assign(Filter, {
  Provider: FilterProvider,
  hooks: { useFilterContext },
});

export default FilterNamespace;
