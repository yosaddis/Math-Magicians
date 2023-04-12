import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Unit test for calculator component', () => {
  test('All Buttons should be rendered correctly', () => {
    render(<Calculator />);
    expect(screen.getAllByRole('button').length).toBe(19);
  });
  test('The display component inside calculator should be rendered correctly', () => {
    render(<Calculator />);
    expect(screen.getByTestId('result-display')).toBeInTheDocument();
  });

  test('The calculator snap shot should be rendered correctly', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });
});
