import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    minHeight: 60,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  inputContainer: {
    borderRadius: 4,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 4,
    textAlign: 'center',
  },
  qrWrapper: {
    zIndex: 999,
    borderRadius: 4,
    backgroundColor: colors.lightGrey,
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default styles;
