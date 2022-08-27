import { fetcher } from '@miista/lib/fetcher';
import React from 'react';
import useSWR from 'swr';

const Test = () => {
  const { data, error, isValidating } = useSWR('/api/products', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data || isValidating) return <div>Loading...</div>;

  return <React.Fragment></React.Fragment>;
};

export default Test;
