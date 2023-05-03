import { StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderRadius: 8,
    backgroundColor: colors.text,
    color: colors.background,
    height: 48,
    paddingLeft: 56,
    paddingRight: 16,
    width: '100%',
  },
  icon: {
    height: 48,
    justifyContent: 'center',
    left: 16,
    position: 'absolute',
    zIndex: 1,
  },
});
