import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should be render correct', () => {
    render(<Input />);

    const input = screen.getByTestId('input');

    expect(input).toBeTruthy();
  });
});
