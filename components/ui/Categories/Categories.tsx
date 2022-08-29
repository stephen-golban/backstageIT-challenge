import React from 'react';

import useSWRImmutable from 'swr/immutable';

import { CategoryLink } from './parts';
import { Box } from '@miista/components/common';

interface ICategoriesProps extends React.PropsWithChildren {}

const Categories: React.FC<ICategoriesProps> = ({ children }) => {
  const { data, isValidating } = useSWRImmutable('/api/categories');

  if (!data || isValidating) {
    return null;
  }

  return (
    <Box className="px-[60px] py-[81px]" justifyContent="space-between" alignItems="center">
      <div />
      <Box maxWidth={850}>
        {data.map((category: string, index: number) => (
          <CategoryLink key={`category-item-${category}-${index}`} category={category} />
        ))}
      </Box>
      {children}
    </Box>
  );
};

export default Categories;
