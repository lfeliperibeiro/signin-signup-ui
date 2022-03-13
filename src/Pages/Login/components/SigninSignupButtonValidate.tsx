import { Button } from '../../../components';
import React from 'react';

export function SigninSignupButtonValidate(props: {
  login: boolean;
  error: boolean;
  message: string;
  loading: boolean;
}) {
  return (
    <div className={'mt-4'}>
      {props.login ? (
        <>
          <div className={'text-red-700 text-center mb-4 text-sm'}>
            {props.error && props.message}
          </div>
          <Button type={'submit'}>
            {props.loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </>
      ) : (
        <>
          <div className={'text-red-700 text-center mb-4 text-sm'}>
            {props.error && props.message}
          </div>
          <Button type={'submit'}>
            {props.loading ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </>
      )}
    </div>
  );
}
