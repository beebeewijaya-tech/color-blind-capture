import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 12,
  },
});

export default styles;
