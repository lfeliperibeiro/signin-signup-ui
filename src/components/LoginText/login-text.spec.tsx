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
});
