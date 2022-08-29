import React from 'react';

import { fetcher } from '@miista/lib';
import { useProducts } from '@miista/lib/hooks';

import { Paginator } from '@miista/components/common';

import { DataType } from '@miista/typings/database';
import { GetStaticPropsContext, NextPage } from 'next';

const Category: NextPage<{ data: DataType[] }> = ({ data }) => {
  const [products, { goToNextPage, goToPrevPage, goToIndex, isLoading, pageIndex }] = useProducts(data);

  if (!products) {
    return <div>loading...</div>;
  }

  return (
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
  );
};

export const getStaticPaths = async () => {
  const categories: string[] = await fetcher(`${process.env.BASE_LINK}/api/categories`);

  const paths = categories.map((category) => {
    return { params: { category } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = String(context.params?.category);
  const data = await fetcher(`${process.env.BASE_LINK}/api/products/${category}`);

  return { props: { data } };
};

export default Category;
