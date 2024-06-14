import {Loader} from '../../../';
import {render} from '../../utils/customRender';

describe('Loader', () => {
  test('renders with default props', () => {
    const {getByTestId} = render(<Loader />);
    const loader = getByTestId('loader');

    expect(loader.props.color).toBe('#009688');
    expect(loader.props.size).toBe('large');
  });

  test('renders with custom props', () => {
    const {getByTestId} = render(<Loader color="red" size="small" />);
    const loader = getByTestId('loader');

    expect(loader.props.color).toBe('red');
    expect(loader.props.size).toBe('small');
  });

  test('renders with additional styles', () => {
    const customStyle = {marginTop: 10};
    const {getByTestId} = render(<Loader style={customStyle} />);
    const loader = getByTestId('loader');

    expect(loader.props.style).toContainEqual(customStyle);
  });
});
