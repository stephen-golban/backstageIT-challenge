import React from 'react';

type UsePaginationProps = {
  pageCount: number;
  currentPageIndex: number;
};

const DOTS = '...';
const SIBLING_COUNT = 1;

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = (props: UsePaginationProps) => {
  const { currentPageIndex, pageCount } = props;

  const paginationRange = React.useMemo(() => {
    // Pages count is determined as SIBLING_COUNT + firstPage + lastPage + currentPageIndex + 2*DOTS
    const totalPageNumbers = SIBLING_COUNT + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..pageCount]
    */
    if (totalPageNumbers >= pageCount) {
      return range(1, pageCount);
    }

    const leftSiblingIndex = Math.max(currentPageIndex - SIBLING_COUNT, 1);
    const rightSiblingIndex = Math.min(currentPageIndex + SIBLING_COUNT, pageCount);

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * SIBLING_COUNT;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, pageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * SIBLING_COUNT;
      let rightRange = range(pageCount - rightItemCount + 1, pageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [currentPageIndex, pageCount]);

  return paginationRange;
};
