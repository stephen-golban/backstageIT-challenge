import React from 'react';

interface IBoxProps extends React.PropsWithChildren, React.CSSProperties {
  className?: string;
}

const Box: React.FC<IBoxProps> = ({ children, className, ...props }) => {
  const { width = '100%', height = 'auto', display = 'flex', zIndex = 1, ...styleProps } = props;

  return (
    <div style={{ display, width, height, zIndex, ...styleProps }} className={className}>
      {children}
    </div>
  );
};

export default Box;
