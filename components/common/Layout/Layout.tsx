import React from 'react';

import * as S from './Layout.styles';
import { Navbar } from '@miista/components/ui';
import Box from '../Box/Box';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <S.Container>
      <Box height="auto" position="absolute">
        <Navbar />
      </Box>

      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;
