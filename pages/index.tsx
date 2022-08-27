import React from 'react';

import useSwrImmutable from 'swr/immutable';

import { Layout } from '@miista/components/common';
import { CategoryBar, Hero } from '@miista/components/ui';

const Index = () => {
  const { data, error, isValidating } = useSwrImmutable('/api/products');

  // //Handle the error state
  // if (error) return <div>Failed to load</div>;
  // //Handle the loading state
  // if (!data || isValidating) return <div>Loading...</div>;
  // console.log(data);
  console.log('data', data);

  return (
    <Layout>
      <Hero />
      <CategoryBar />
    </Layout>
  );
};

export default Index;
