import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../components/ButtonActions';

describe('Unit test for button actions component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Button
          typeBtn="AC"
          btnOnClick={() => { }}
          primary
          btnClass="btn-clear"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
