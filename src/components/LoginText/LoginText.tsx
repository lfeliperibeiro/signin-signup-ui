type Props = {
  onClick: () => void;
  isLogin: boolean;
};

export const LoginText = ({ onClick, isLogin }: Props) => {
  return (
    <div className={'flex flex-col items-center'} data-testid={'login-text'}>
      <h1 className={'font-bold text-xl'} data-testid={'login-title'}>
        {isLogin ? 'Faça seu Login' : 'Crie sua Conta'}
      </h1>
      <div className={'flex flex-col items-center'}>
        <p
          className={'text-sm mr-0.5 text-gray-500'}
          data-testid={'login-subtitle'}
        >
          {isLogin
            ? 'Você ainda não tem conta? então faça o'
            : 'Crie sua conta agora'}
        </p>
        <a
          className={'text-sm text-amber-600 hover:text-amber-900'}
          onClick={onClick}
          data-testid={'login-link'}
        >
          {isLogin ? 'cadastro' : 'voltar ao login'}
        </a>
      </div>
    </div>
  );
};
