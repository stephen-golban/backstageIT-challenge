import { useFilterContext } from '@miista/components/ui/Filter/context';
import { DataType } from '@miista/typings/database';
import React from 'react';
import useFilter from './useFilter';

export const multiPropsFilter = (products: DataType, state: any, byColor: any, byPrice: any) => {
  var filteredProducts = products;

  for (let key in state) {
    if (state[key as keyof typeof state].length > 0) {
      if (key === 'price') {
        filteredProducts = byPrice;
      }
      if (key === 'color') {
        filteredProducts = byColor;
      }
    }
  }
  return filteredProducts;
};
