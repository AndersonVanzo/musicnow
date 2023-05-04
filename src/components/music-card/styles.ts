import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    height: 56,
    width: '100%',
  },
  image: {
    aspectRatio: 1,
    height: 56,
    width: undefined,
  },
  infoWrapper: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 14,
  },
  artist: {
    color: colors.text_inactive,
    fontSize: 12,
  },
  length: {
    color: colors.text_inactive,
    fontSize: 12,
  },
});
