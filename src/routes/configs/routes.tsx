import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Configs from '../../screens/configs/configs';

const Stack = createStackNavigator();

const ScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const ConfigsRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'ConfigsScreen'}>
      <Stack.Screen name={'ConfigsScreen'} component={Configs} options={ScreenOptions} />
    </Stack.Navigator>
  );
};

export default ConfigsRoutes;
