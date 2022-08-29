import React from 'react';
import Button from '../../Button/Button';

interface IPaginatorButtonProps extends React.PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
  focused?: boolean;
}

const PaginatorButton: React.FC<IPaginatorButtonProps> = ({ children, onClick, disabled, focused }) => {
  const defaultAppearance = 'text-black border-[#d9d9d9]';
  const hoveredAppearance = !disabled && 'hover:text-[#1890ff] hover:border-[#1890ff]';
  const focusedAppearance = focused ? 'text-[#1890ff] border-[#1890ff]' : `${defaultAppearance} ${hoveredAppearance}`;

  return (
    <Button
      onClick={onClick}
      disabled={focused ?? disabled}
      opacity={disabled ? 0.5 : 1}
      fontWeight="bold"
      fontSize={22}
      cursor={focused ?? disabled ? 'not-allowed' : 'pointer'}
      className={`py-1 px-4 mx-3 transition-all border-2 ${focusedAppearance}`}
    >
      {children}
    </Button>
  );
};

export default PaginatorButton;
