import React from 'react';

import { SvgType } from './types';

const CloseIcon: React.FC<SvgType> = (props) => (
  <svg width={17} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m1 1 7.5 6.5m0 0-7.5 6m7.5-6L16 1M8.5 7.5l7.5 6" stroke="#000" />
  </svg>
);

export default CloseIcon;
