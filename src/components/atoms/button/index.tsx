/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import { Pressable, Text } from 'react-native';

import type ButtonProps from './type';

const Button = ({ onPress, title }: ButtonProps): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;