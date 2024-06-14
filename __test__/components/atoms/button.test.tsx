import {fireEvent, screen} from '@testing-library/react-native';

import {Button} from '../../../';
import {render} from '../../utils/customRender';

const onPressMock = jest.fn();
const defaultProps = {
  onPress: onPressMock,
  title: 'Test Button'
};
export const Btn = () => <Button {...defaultProps} />;

describe('Button', () => {
  let buttonElement: any;
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([])
    });
    const {getByText} = render(<Btn />);
    buttonElement = getByText(defaultProps.title);
  });
  test('Match Snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  test('renders correctly', () => {
    expect(buttonElement).toBeTruthy();
  });
  test('calls onPress function when pressed', () => {
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
