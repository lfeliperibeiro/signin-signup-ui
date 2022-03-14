import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      data-testid={'button'}
      className={
        'text-xl bg-amber-600 text-white w-full px-0.5 py-2 rounded hover:bg-amber-900'
      }
      {...rest}
    >
      {children}
    </button>
  );
};
