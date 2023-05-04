import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import usePlayerContext from '../../../../hooks/usePlayerContext';
import Animated from 'react-native-reanimated';

const ProgressBar = (): JSX.Element => {
  const { progress, progressBarWidth } = usePlayerContext();

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.bar} />
        <Animated.View style={[styles.bar, styles.filledBar, progressBarWidth]} />
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>{formatTime(progress.position)}</Text>
        <Text style={styles.time}>{formatTime(progress.duration)}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
