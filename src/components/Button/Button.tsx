import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const Button = ({ text, onClick, ...rest }: Props) => {
  return (
    <button
      className={
        'text-xl bg-amber-600 text-white w-full px-0.5 py-2 rounded hover:bg-amber-900'
      }
      {...rest}
    >
      {text}
    </button>
  );
};
