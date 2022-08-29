import React from 'react';
import { useUpdateEffect } from 'react-use';

import * as S from './Filter.color.styles';

interface IFilterColorProps {
  color: string;
  onChange: (val: string) => void;
  defaultChecked?: boolean;
}

const FilterColor: React.FC<IFilterColorProps> = ({ defaultChecked, color, onChange }) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  const selectedStyles = isChecked ? 'ring-2 ring-sky-600' : 'ring-1 ring-black ring-opacity-5 hover:opacity-75';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    return onChange(e.target.value);
  };

  useUpdateEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <S.Label
      htmlFor={color}
      className={selectedStyles}
      style={{ backgroundColor: color === 'natural' ? '#ae4a60' : color }}
    >
      <input
        id={color}
        value={color}
        type="checkbox"
        className="none"
        checked={isChecked}
        onChange={handleChange}
        style={{ appearance: 'none' }}
      />
    </S.Label>
  );
};

export default FilterColor;
