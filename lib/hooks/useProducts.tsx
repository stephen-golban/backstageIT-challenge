import React from 'react';

import useFilter from './useFilter';
import { sleep } from '@miista/lib/sleep';
import { paginate, PaginateResult } from '@miista/lib/paginate';

import { DataType } from '@miista/typings/database';

const PER_PAGE = 8;

type Utilities = {
  pageIndex: number;
  isLoading: boolean;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToIndex: (index: number) => void;
};

const useProducts = (data: DataType[]): [PaginateResult, Utilities] => {
  const [pageIndex, setPageIndex] = React.useState(1);
  const { filtered } = useFilter(data);
  const [isLoading, setIsLoading] = React.useState(false);

  const paginated = paginate<DataType>(filtered?.length < 1 ? data : filtered, PER_PAGE, pageIndex);

  const handleChangeIndex = React.useCallback(async (index: number) => {
    setIsLoading(true);
    await sleep().then(() => setIsLoading(false));
    return setPageIndex(index);
  }, []);

  const goToNextPage = React.useCallback(() => handleChangeIndex(pageIndex + 1), [handleChangeIndex, pageIndex]);
  const goToPrevPage = React.useCallback(() => handleChangeIndex(pageIndex - 1), [handleChangeIndex, pageIndex]);

  const utilities = React.useMemo<Utilities>(() => {
    return { goToNextPage, goToPrevPage, goToIndex: handleChangeIndex, isLoading, pageIndex };
  }, [goToNextPage, goToPrevPage, handleChangeIndex, isLoading, pageIndex]);

  return [paginated, utilities];
};

export default useProducts;
