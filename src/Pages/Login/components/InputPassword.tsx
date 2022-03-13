import React from 'react';
import { Input } from '../../../components';
import eyesOpenImage from '../../../assets/images/open.svg';
import eyesCloseImage from '../../../assets/images/close.svg';

export function InputPassword(props: {
  value: string;
  passwordShown: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
  return (
    <div className={'relative flex'}>
      <Input
        value={props.value}
        type={props.passwordShown ? 'text' : 'password'}
        placeholder={'Senha'}
        onChange={props.onChange}
      />
      <span
        className={
          'cursor-pointer flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2'
        }
        onClick={props.onClick}
      >
        {!props.passwordShown ? (
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
  );
}
