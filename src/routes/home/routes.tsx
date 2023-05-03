import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/home/home';

const Stack = createStackNavigator();

const HomeRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'HomeScreen'} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
