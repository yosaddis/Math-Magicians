import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Unit test for home component', () => {
  test('The title in Home component should be rendered correctly.', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
  });
  test('Home component should be rendered correctly.', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
