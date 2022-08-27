import React from 'react';

import * as S from './Hero.styles';

const Hero: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <S.HeroWrapper>{children}</S.HeroWrapper>;
};

export default Hero;
