/**
 * Renders a modal component.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the modal.
 * @param {StyleProp<ViewStyle>} props.style - The custom styles to be applied to the modal.
 * @param {boolean} props.show - Determines whether the modal should be visible or not.
 * @param {() => void} props.onClose - The function to be called when the modal is closed.
 * @param {() => void} props.onShow - The function to be called when the modal is shown.
 * @returns {JSX.Element} The rendered modal component.
 */

import {useState} from 'react';
import {Alert, Modal as RNModal, View} from 'react-native';

import Button from '../button';
import styles from './styles';

import type {ViewProps} from 'react-native';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  show?: boolean;
  style?: ViewProps;
  onClose?: () => void;
  onShow?: () => void;
};

const Modal = ({
  children,
  style,
  show,
  onClose,
  onShow
}: ModalProps): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(show || false);
  const showModal = () => {
    onClose && onClose();
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <RNModal
        testID="modal"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onShow={onShow}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          showModal();
        }}>
        <View style={[style, styles.modalView]}>
          {children}
          <Button title="Hide Modal" onPress={showModal} />
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;
