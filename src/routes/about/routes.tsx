import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import About from '../../screens/about/about';

const Stack = createStackNavigator();

const ScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const AboutRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'AboutScreen'}>
      <Stack.Screen name={'AboutScreen'} component={About} options={ScreenOptions} />
    </Stack.Navigator>
  );
};

export default AboutRoutes;
