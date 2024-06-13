import type {TextStyle, ViewStyle} from 'react-native';
import type {PressableProps} from 'react-native/Libraries/Components/Pressable/Pressable';

interface ButtonProps extends PressableProps {
  title: string;
  style?: ViewStyle | ViewStyle[];
  styleText?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress: PressableProps['onPress'];
}

export default ButtonProps;
