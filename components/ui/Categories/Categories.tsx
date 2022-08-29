import React from 'react';

import { CategoryLink } from './parts';
import { Box } from '@miista/components/common';

interface ICategoriesProps extends React.PropsWithChildren {
  categories: string[];
}

const Categories: React.FC<ICategoriesProps> = ({ children, categories }) => {
  return (
    <Box className="px-[60px] py-[81px]" justifyContent="space-between" alignItems="center">
      <div />
      <Box maxWidth={850}>
        {categories.map((category: string, index: number) => (
          <CategoryLink key={`category-item-${category}-${index}`} category={category} />
        ))}
      </Box>
      {children}
    </Box>
  );
};

export default Categories;
