import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginBottom: 16,
  },
  song: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    color: colors.text,
    fontSize: 16,
  },
});
