import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../utils/colors';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width - 100,
    height: 150,
    resizeMode: 'contain',
  },
  imageWrapper: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  bottomWrapper: {
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 12,
  },
});

export default styles;
