import { Box } from '@miista/components/common';
import Link from 'next/link';
import React from 'react';

interface ICategoriesProps {
  data: string[];
}

const Categories: React.FC<ICategoriesProps> = ({ data }) => {
  return (
    <Box maxWidth={850}>
      {data.map((category, index) => (
        <Box
          key={`category-item-${category}-${index}`}
          width="auto"
          color="black"
          cursor="pointer"
          letterSpacing="1px"
          className="uppercase mx-3 hover:underline transition-all"
        >
          <Link href="/">{category}</Link>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
