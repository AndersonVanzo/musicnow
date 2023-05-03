import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Button from '../../../../components/button/button';
import { Icons } from '../../../../common/icons';
import { colors } from '../../../../common/colors';

interface ControlsProps {
  status: 'playing' | 'paused';
}

const Controls = ({ status }: ControlsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Button style={styles.button}>
        <Icons.Player.Prev color={colors.text} height={24} width={24} />
      </Button>
      <Button style={[styles.button, styles.mainButton]}>
        {status === 'playing' ? (
          <Icons.Player.Pause color={colors.background} height={42} width={42} />
        ) : (
          <Icons.Player.Play color={colors.background} height={42} width={42} />
        )}
      </Button>
      <Button style={styles.button}>
        <Icons.Player.Next color={colors.text} height={24} width={24} />
      </Button>
    </View>
  );
};

export default Controls;
