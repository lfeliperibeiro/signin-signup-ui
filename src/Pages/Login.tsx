import { Input, Button, LoginText } from '../components';
import { useState } from 'react';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className={
        'bg-amber-300 w-screen h-screen flex items-center justify-center'
      }
    >
      <div className={'bg-white rounded shadow-lg m-6'}>
        <form className={'p-6'}>
          {isLogin ? (
            <LoginText
              title={'Faça seu Login'}
              text={'Você ainda não tem conta? então faça o'}
              linkText={'cadastro'}
              onClick={() => setIsLogin(false)}
            />
          ) : (
            <LoginText
              title={'Faça seu Cadastro'}
              text={'Faça seu cadastro agora'}
              linkText={'voltar'}
              onClick={() => setIsLogin(true)}
            />
          )}

          <div className={'flex flex-col mt-4 gap-1.5'}>
            <Input type="email" placeholder={'E-mail'} />
            <Input type="password" placeholder={'Senha'} />
          </div>
          <div className={'mt-2'}>
            {isLogin ? (
              <Button text={'Entrar'} onClick={() => {}} />
            ) : (
              <Button text={'Cadastrar'} onClick={() => {}} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
