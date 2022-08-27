import React from 'react';

import { SvgType } from './types';

const SearchIcon: React.FC<SvgType> = (props) => (
  <svg width={13} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.756 10.806 9.661 7.694a4.818 4.818 0 0 0 .902-2.819A4.879 4.879 0 0 0 5.686 0 4.879 4.879 0 0 0 .813 4.875 4.879 4.879 0 0 0 5.688 9.75a4.837 4.837 0 0 0 2.82-.902l3.112 3.096a.788.788 0 0 0 .569.243.745.745 0 0 0 .568-.243.808.808 0 0 0 0-1.146v.008ZM5.687 8.694A3.825 3.825 0 0 1 1.87 4.875a3.825 3.825 0 0 1 3.819-3.819 3.825 3.825 0 0 1 3.818 3.819 3.825 3.825 0 0 1-3.819 3.819Z"
      fill="#fff"
    />
  </svg>
);

export default SearchIcon;
