import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  common: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  text: {
    textAlign: 'center',
    fontSize: 16
  }
});

export default styles;
