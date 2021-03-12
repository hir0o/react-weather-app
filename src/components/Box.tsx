import { FC } from 'react';

type PropTyoe = {
  size?: 'md' | 'lg';
  className?: string;
};

const Box: FC<PropTyoe> = ({ children, size, className }) => {
  const sizes = {
    md: 'py-5 px-7',
    lg: 'p-6',
  };

  return (
    <div
      className={`bg-regal-blue-300 ${sizes[size || 'md']} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Box;
