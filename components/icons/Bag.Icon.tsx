import React from 'react';

import { SvgType } from './types';

const BagIcon: React.FC<SvgType> = (props) => {
  return (
    <svg width={10} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 3h1v9H0V3ZM2 1h1v3H2V1ZM7 1h1v3H7V1ZM9 3h1v9H9V3Z" fill="#fff" />
      <path d="M1 3h8v1H1V3ZM2 0h6v1H2V0ZM1 11h8v1H1v-1Z" fill="#fff" />
    </svg>
  );
};

export default BagIcon;
