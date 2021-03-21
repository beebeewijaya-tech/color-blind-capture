import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
  },
  textWrapper: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '900',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 50,
  },
});

export default styles;
