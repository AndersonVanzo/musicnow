import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '100%',
  },
  barWrapper: {
    width: '100%',
  },
  bar: {
    backgroundColor: colors.surface,
    borderRadius: 2,
    height: 4,
    width: '100%',
  },
  filledBar: {
    backgroundColor: colors.primary,
    position: 'absolute',
    width: '27%',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  time: {
    color: colors.text,
    fontSize: 10,
  },
});
