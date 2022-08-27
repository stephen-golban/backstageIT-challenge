import React from 'react';

import useSwrImmutable from 'swr/immutable';

import Filter from './parts/Filter/Filter';
import Categories from './parts/Categories';
import { Box, Dropdown } from '@miista/components/common';

const CategoryBar: React.FC = () => {
  const { data: categories, isValidating, error } = useSwrImmutable('/api/categories');

  return (
    <Box className="px-[60px] py-[81px]" justifyContent="space-between" alignItems="center">
      <div />
      {isValidating || error ? <div>loading...</div> : <Categories data={categories} />}
      <Dropdown
        renderTrigger={
          <Box width="auto" cursor="pointer" className="text-miista-gray uppercase">
            Filters
          </Box>
        }
      >
        {(dropdownUtils) => <Filter open={dropdownUtils.open} onClose={dropdownUtils.close} />}
      </Dropdown>
    </Box>
  );
};

export default CategoryBar;
