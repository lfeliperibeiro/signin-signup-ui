import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render correct', () => {
    render(<Button>test</Button>);
    const button = screen.getByTestId('button');
    expect(button).toBeTruthy();
    expect(button).toMatchSnapshot();
  });
});
