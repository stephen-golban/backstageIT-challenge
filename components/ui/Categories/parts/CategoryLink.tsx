import { Box, Button } from '@miista/components/common';
import { fetcher } from '@miista/lib';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ICategoryLinkProps {
  category: string;
}

const CategoryLink: React.FC<ICategoryLinkProps> = ({ category }) => {
  const { query, pathname } = useRouter();

  const isPathMatching = query.category === category || (category === 'all' && pathname === '/');

  return (
    <Button
      width="auto"
      color="black"
      cursor="pointer"
      letterSpacing="1px"
      className={`uppercase mx-3 ${isPathMatching ? 'underline' : 'hover:underline'} transition-all`}
    >
      <Link passHref href={category === 'all' ? '/' : `/categories/${category}`} scroll={false}>
        {category.replace('-', ' ')}
      </Link>
    </Button>
  );
};

export default CategoryLink;
