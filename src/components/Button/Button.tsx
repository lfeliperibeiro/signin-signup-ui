type Props = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className={
        'text-xl bg-amber-600 text-white w-full px-0.5 py-2 rounded hover:bg-amber-900'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
