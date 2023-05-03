import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Home from '../../screens/home/home';

const Stack = createStackNavigator();

const NavigatorScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const HomeRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={NavigatorScreenOptions}>
      <Stack.Screen name={'HomeScreen'} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
