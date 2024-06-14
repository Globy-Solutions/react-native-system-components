import {Text} from 'react-native';
import {Modal} from '../../../';
import {fireEvent, render} from '../../utils/customRender';

import type {ReactTestInstance} from 'react-test-renderer';

const text = 'Modal Content';

describe('Modal', () => {
  describe('when modal is not visible', () => {
    test('is not visible', () => {
      const {queryByText, queryByTestId} = render(
        <Modal>
          <Text>{text}</Text>
        </Modal>
      );
      expect(queryByText(text)).toBeNull();
      expect(queryByTestId('modal')).toBeNull();
    });
  });

  describe('when modal is visible', () => {
    let modal: ReactTestInstance;
    const onCloseMock = jest.fn();
    const onShowMock = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
      const {getByText} = render(
        <Modal show={true} onClose={onCloseMock} onShow={onShowMock}>
          <Text>{text}</Text>
        </Modal>
      );

      modal = getByText(text);
    });

    test('renders correctly', () => {
      expect(modal).toBeTruthy();
    });

    test('check modal visibilty', () => {
      expect(modal).toBeVisible();
    });

    test('calls onClose function when modal is closed', () => {
      fireEvent(modal, 'requestClose');
      expect(onCloseMock).toHaveBeenCalled();
    });

    test('calls onShow function when modal is shown', () => {
      fireEvent(modal, 'show');
      expect(onShowMock).toHaveBeenCalled();
    });
  });
});
