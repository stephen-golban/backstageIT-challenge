import { useUpdateEffect } from 'react-use';
import { useFilterContext } from '@miista/components/ui/Filter/context';

import { filter } from 'smart-array-filter';
import { DataType } from '@miista/typings/database';

const useFilter = (data?: DataType[]) => {
  const { state } = useFilterContext();

  const byPrice =
    data &&
    filter(data, {
      keywords: `node.shopifyProductEu.variants.edges.node.price:${state.price[0]}..${state.price[1]}`,
    });

  const byColor =
    byPrice &&
    filter(byPrice, {
      keywords: `node.colorFamily.name:${state?.colors.map((i) => i).join(',')}`,
    });

  return { filtered: byColor! };
};

export default useFilter;
