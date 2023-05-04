import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const styles = StyleSheet.create({
  versionWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  version: {
    color: colors.text,
    fontSize: 12,
  },
});
