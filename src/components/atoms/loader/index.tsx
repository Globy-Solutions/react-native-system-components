import { ActivityIndicator } from 'react-native';
import styles from './styles';

const Loader = (): JSX.Element => {
  return (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={styles.ActivityIndicatorStyle}
    />
  );
};

export default Loader;