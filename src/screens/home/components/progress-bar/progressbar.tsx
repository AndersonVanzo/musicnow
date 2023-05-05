import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import usePlayerContext from '../../../../hooks/usePlayerContext';
import Animated from 'react-native-reanimated';
import { formatSeconds } from '../../../../utils/formatSeconds';

const ProgressBar = (): JSX.Element => {
  const { progress, progressBarWidth } = usePlayerContext();

  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.bar} />
        <Animated.View style={[styles.bar, styles.filledBar, progressBarWidth]} />
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>{formatSeconds(progress.position)}</Text>
        <Text style={styles.time}>{formatSeconds(progress.duration)}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
