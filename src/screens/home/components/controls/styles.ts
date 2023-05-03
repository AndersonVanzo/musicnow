import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: 32,
    justifyContent: 'center',
    width: 48,
  },
  mainButton: {
    backgroundColor: colors.text,
    borderRadius: 32,
    width: 64,
  },
});
