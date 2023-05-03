import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Configs from '../../screens/configs/configs';

const Stack = createStackNavigator();

const ConfigsRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'ConfigsScreen'} component={Configs} />
    </Stack.Navigator>
  );
};

export default ConfigsRoutes;
