import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ ...rest }: Props) => {
  return (
    <input
      className={
        'text-sm border-2 p-2 rounded  border-amber-400 focus:border-amber-900 w-72'
      }
      {...rest}
    />
  );
};
