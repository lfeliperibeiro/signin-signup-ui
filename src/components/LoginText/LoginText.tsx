type Props = {
  title: string;
  text: string;
  linkText: string;
  onClick: () => void;
};

export const LoginText = ({ text, linkText, onClick, title }: Props) => {
  return (
    <div className={'flex flex-col items-center'}>
      <h1 className={'font-bold text-xl'}>{title}</h1>
      <div className={'flex flex-col items-center'}>
        <p className={'text-sm mr-0.5 text-gray-500'}>{text}</p>
        <a
          className={'text-sm text-amber-600 hover:text-amber-900'}
          onClick={onClick}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};
