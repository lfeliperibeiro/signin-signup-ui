import { Button, Input, LoginText } from '../components';
import React, { useState } from 'react';
import { signSignupUrl } from '../lib/axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import eyesOpenImage from '../assets/images/open.svg';
import eyesCloseImage from '../assets/images/close.svg';

export type SignupInputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const { handleSubmit } = useForm<SignupInputs>();

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    return setEmail(e.target.value);
  }

  console.log(email);
  console.log(password);

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    return setPassword(e.target.value);
  }

  const handleSignup: SubmitHandler<SignupInputs> = () => {
    signSignupUrl
      .post(
        '/auth/signup',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {
        navigate('/dashboard');
      });
  };

  const handleSignin: SubmitHandler<SignupInputs> = () => {
    signSignupUrl
      .post(
        '/auth/signin',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {});
  };

  return (
    <div
      className={
        'bg-amber-300 w-screen h-screen flex items-center justify-center'
      }
    >
      <div className={'bg-white rounded shadow-lg m-6'}>
        <form
          className={'p-6'}
          onSubmit={
            isLogin ? handleSubmit(handleSignin) : handleSubmit(handleSignup)
          }
        >
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
            <Input
              value={email}
              type="email"
              placeholder={'E-mail'}
              onChange={handleEmail}
            />
            <div className={'relative flex'}>
              <Input
                value={password}
                type={passwordShown ? 'text' : 'password'}
                placeholder={'Senha'}
                onChange={handlePassword}
              />
              <span
                className={
                  'cursor-pointer flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2'
                }
                onClick={togglePasswordVisibility}
              >
                {!passwordShown ? (
                  <img
                    src={eyesOpenImage}
                    width={25}
                    height={25}
                    alt={'show password'}
                  />
                ) : (
                  <img
                    src={eyesCloseImage}
                    width={25}
                    height={25}
                    alt={'hide password'}
                  />
                )}
              </span>
            </div>
          </div>
          <div className={'mt-2'}>
            {isLogin ? (
              <Button type={'submit'} text={'Entrar'} />
            ) : (
              <Button type={'submit'} text={'Cadastrar'} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
