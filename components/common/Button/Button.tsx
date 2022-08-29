import React from 'react';

interface IButtonProps extends React.PropsWithChildren, React.CSSProperties {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: React.ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
}

const Button: React.FC<IButtonProps> = ({ children, className, onClick, disabled, ...props }) => {
  const { border = 0, backgroundColor = 'transparent', ...styleProps } = props;
  const borderValue = className?.includes('border') ? {} : { border };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...borderValue, backgroundColor, ...styleProps }}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
