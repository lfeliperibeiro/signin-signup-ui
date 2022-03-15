import { Input, LoginText } from '../../components';
import React, { useState } from 'react';
import { signSignupUrl } from '../../lib/axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Inputs } from './types';
import { SigninSignupButtonValidate } from './components/SigninSignupButtonValidate';
import { InputPassword } from './components/InputPassword';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const { setToken } = useStore();

  const { handleSubmit } = useForm<Inputs>();

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    return setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    return setPassword(e.target.value);
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  function errorStatusMessage(error: Error, message: string) {
    if (error.message === 'Request failed with status code 400') {
      return setMessage('Preencha todos os campos');
    } else if (error.message === 'Request failed with status code 403') {
      return setMessage(message);
    }
  }

  const onSubmit: SubmitHandler<Inputs> = () => {
    const url = isLogin ? '/auth/signin' : '/auth/signup';
    setLoading(true);
    signSignupUrl
      .post(
        url,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {
        setLoading(true);
        navigate('/user');
        setToken(res.data.access_token);
      })
      .catch((error) => {
        isLogin
          ? errorStatusMessage(error, 'email e/ou senha inválido')
          : errorStatusMessage(error, 'Esse usuário já existe');
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div
      className={
        'bg-amber-300 w-screen h-screen flex items-center justify-center'
      }
    >
      <div className={'bg-white rounded-lg shadow-lg m-6'}>
        <form className={'p-6'} onSubmit={handleSubmit(onSubmit)}>
          <LoginText onClick={() => setIsLogin(!isLogin)} isLogin={isLogin} />
          <div className={'flex flex-col mt-4 gap-1.5'}>
            <Input
              value={email}
              type="email"
              placeholder={'E-mail'}
              onChange={handleEmail}
            />
            <InputPassword
              value={password}
              passwordShown={passwordShown}
              onChange={handlePassword}
              onClick={togglePasswordVisibility}
            />
          </div>
          <SigninSignupButtonValidate
            login={isLogin}
            error={error}
            message={message}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};
