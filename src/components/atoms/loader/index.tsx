/**
 * Renders a loader component.
 *
 * @param {string} color - The color of the loader. Defaults to '#009688' if not provided.
 * @param {string} size - The size of the loader. Defaults to 'large' if not provided.
 * @param {object} style - Additional styles to apply to the loader.
 * @returns {JSX.Element} - The rendered loader component.
 */

import {ActivityIndicator} from 'react-native';
import styles from './styles';

import type {LoaderProps} from './type';

const Loader = ({color, size, style}: LoaderProps): JSX.Element => (
  <ActivityIndicator
    testID="loader"
    color={color ?? '#009688'}
    size={size ?? 'large'}
    style={[styles.ActivityIndicatorStyle, style]}
  />
);

export default Loader;
