import React from 'react';
import Box from '../Box/Box';
import { PaginatorButton, PaginatorPage, PaginatorPages, PaginatorUtilities } from './parts';

interface IPaginatorProps extends React.PropsWithChildren {}

const Paginator: React.FC<IPaginatorProps> = ({ children }) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="column">{children}</Box>
    </Box>
  );
};

const PaginatorNameSpace = Object.assign(Paginator, {
  Page: PaginatorPage,
  Pages: PaginatorPages,
  Button: PaginatorButton,
  Utilities: PaginatorUtilities,
});

export default PaginatorNameSpace;
