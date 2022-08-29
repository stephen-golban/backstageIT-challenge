import { DataType } from '@miista/typings/database';

export type PaginateResult<T = DataType> = {
  pageIndex: number;
  paginatedItems: T[];
  per_page: number;
  pre_page: number | null;
  next_page: number | null;
  total: number;
  total_pages: number;
};

export const paginate = <T>(array: T[], perPageItems: number, pageIndex: number): PaginateResult<T> => {
  let page = pageIndex || 1,
    per_page = perPageItems || 10,
    offset = (page - 1) * per_page,
    paginatedItems = array?.slice(offset).slice(0, perPageItems),
    total_pages = Math.ceil(array?.length / per_page);

  return {
    pageIndex: page,
    paginatedItems,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: array?.length,
    total_pages: total_pages,
  };
};
