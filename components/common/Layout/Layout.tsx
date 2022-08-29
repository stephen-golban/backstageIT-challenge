import React from 'react';

import * as S from './Layout.styles';
import { Hero, Navbar } from '@miista/components/ui';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <S.Container>
      <Hero>
        <Navbar />
      </Hero>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;
