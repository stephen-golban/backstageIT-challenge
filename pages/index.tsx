import React from 'react';

import useSWR from 'swr';
import { useProducts } from '@miista/lib/hooks';

import { Paginator } from '@miista/components/common';

import { NextPage } from 'next';
import { DataType } from '@miista/typings/database';

interface IIndexProps {
  data: DataType[];
}

const Index: NextPage<IIndexProps> = ({}) => {
  const { data, error } = useSWR('/api/products/all');
  const [products, { goToNextPage, goToPrevPage, goToIndex, isLoading, pageIndex }] = useProducts(data);

  if (!data || error) {
    return <div>loading...</div>;
  }

  return (
    <React.Fragment>
      <Paginator>
        <Paginator.Page products={products.paginatedItems} isLoading={isLoading} />
        <Paginator.Utilities>
          <Paginator.Button onClick={goToPrevPage} disabled={pageIndex <= 1}>
            &lt;
          </Paginator.Button>
          <Paginator.Pages pageCount={products.total_pages} currentPageIndex={pageIndex} goToIndex={goToIndex} />

          <Paginator.Button onClick={goToNextPage} disabled={pageIndex === products.total_pages}>
            &gt;
          </Paginator.Button>
        </Paginator.Utilities>
      </Paginator>
    </React.Fragment>
  );
};

export default Index;
