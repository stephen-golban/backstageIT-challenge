import React from 'react';

import { random } from '@miista/lib';
import { usePagination } from '../hooks/usePagination';

import Box from '../../Box/Box';
import PaginatorButton from './Paginator.Button';

interface IPaginatorPagesProps {
  pageCount: number;
  currentPageIndex: number;
  goToIndex: (index: number) => void;
}

const PaginatorPages: React.FC<IPaginatorPagesProps> = ({ pageCount, currentPageIndex, goToIndex }) => {
  const paginationRange = usePagination({ currentPageIndex, pageCount });

  if (!paginationRange) {
    return null;
  }

  return (
    <Box>
      {paginationRange.map((page) => {
        return (
          <PaginatorButton
            key={`P-P-item-${page + random()}`}
            focused={currentPageIndex === page}
            disabled={typeof page === 'string'}
            onClick={() => {
              if (typeof page === 'number') {
                return goToIndex(page);
              }
              return;
            }}
          >
            {page}
          </PaginatorButton>
        );
      })}
    </Box>
  );
};

export default PaginatorPages;
