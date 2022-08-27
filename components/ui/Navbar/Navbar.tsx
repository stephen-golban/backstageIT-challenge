import React from 'react';

import Link from 'next/link';

import * as S from './Navbar.styles';
import { BagIcon, HeartIcon, SearchIcon } from '@miista/components/icons';

const Navbar: React.FC = () => {
  const navLinksList = ['shop', 'e8 by miista', 'stores', 'about', 'journal'];
  const iconList = [SearchIcon, HeartIcon, BagIcon];
  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo>m i i s t a</S.Logo>
        </Link>
        <S.Wrapper>
          {navLinksList.map((item, index) => (
            <Link key={`nav-link-${item}-${index}`} href="/">
              <S.NavLink>{item}</S.NavLink>
            </Link>
          ))}
        </S.Wrapper>
        <S.Wrapper>
          <Link href="/">
            <S.NavLink>EN$</S.NavLink>
          </Link>
          <Link href="/">
            <S.NavLink>account</S.NavLink>
          </Link>
          <Link href="/">
            <S.NavLink>assistance</S.NavLink>
          </Link>

          {/* render the icons */}
          {iconList.map((Icon, index) => (
            <Link key={`nav-icon-${Icon.name}-${index}`} href="/">
              <S.NavLink className="mx-1">
                <Icon width={20} />
              </S.NavLink>
            </Link>
          ))}
        </S.Wrapper>
      </S.Nav>
    </S.Container>
  );
};

export default Navbar;
