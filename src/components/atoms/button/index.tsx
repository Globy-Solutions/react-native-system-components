/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import {Pressable, Text} from 'react-native';
import styles from './styles';

import type {ButtonProps} from './type';

const Button = ({
  onPress,
  title,
  style,
  styleText
}: ButtonProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={[styles.common, style]}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
