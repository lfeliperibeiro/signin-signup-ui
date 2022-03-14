import { render, screen } from '@testing-library/react';
import { LoginText } from './LoginText';

describe('LoginText', () => {
  const fn = jest.fn();
  it('should render correct', () => {
    render(<LoginText onClick={fn} isLogin={true} />);
    const component = screen.getByTestId('login-text');

    expect(component).toBeTruthy();
  });

  it('should title of isLogin is true', () => {
    render(<LoginText onClick={fn} isLogin={true} />);
    const title = screen.getByTestId('login-title');

    expect(title.textContent).toBe('Faça seu Login');
  });

  it('should title of isLogin is false', () => {
    render(<LoginText onClick={fn} isLogin={false} />);
    const title = screen.getByTestId('login-title');

    expect(title.textContent).toBe('Crie sua Conta');
  });

  it('should subtitle of isLogin is true', () => {
    render(<LoginText onClick={fn} isLogin={true} />);
    const title = screen.getByTestId('login-subtitle');

    expect(title.textContent).toBe('Você ainda não tem conta? então faça o');
  });

  it('should subtitle of isLogin is false', () => {
    render(<LoginText onClick={fn} isLogin={false} />);
    const title = screen.getByTestId('login-subtitle');

    expect(title.textContent).toBe('Crie sua conta agora');
  });
});
