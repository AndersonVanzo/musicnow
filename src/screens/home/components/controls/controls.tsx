import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Button from '../../../../components/button/button';
import { Icons } from '../../../../common/icons';
import { colors } from '../../../../common/colors';
import usePlayerContext from '../../../../hooks/usePlayerContext';

const Controls = (): JSX.Element => {
  const { playerStatus, handlePrevMusic, handleNextMusic, handlePlayPauseMusic } = usePlayerContext();

  return (
    <View style={styles.container}>
      <Button onPress={() => handlePrevMusic()} style={styles.button}>
        <Icons.Player.Prev color={colors.text} height={24} width={24} />
      </Button>
      <Button onPress={() => handlePlayPauseMusic()} style={[styles.button, styles.mainButton]}>
        {playerStatus === 'playing' ? (
          <Icons.Player.Pause color={colors.background} height={42} width={42} />
        ) : (
          <Icons.Player.Play color={colors.background} height={42} width={42} />
        )}
      </Button>
      <Button onPress={() => handleNextMusic()} style={styles.button}>
        <Icons.Player.Next color={colors.text} height={24} width={24} />
      </Button>
    </View>
  );
};

export default Controls;
