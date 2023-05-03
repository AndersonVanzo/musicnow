import { StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 8,
    width: '100%',
  },
  filter: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    flex: 1,
    height: 32,
    justifyContent: 'center',
  },
  filterSelected: {
    backgroundColor: colors.text_inactive,
  },
  label: {
    color: colors.text,
    fontSize: 12,
  },
});
