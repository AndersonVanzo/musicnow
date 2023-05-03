import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Library from '../../screens/library/library';

const Stack = createStackNavigator();

const ScreenOptions: StackNavigationOptions = {
  headerShown: false,
};

const LibraryRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'LibraryScreen'}>
      <Stack.Screen name={'LibraryScreen'} component={Library} options={ScreenOptions} />
    </Stack.Navigator>
  );
};

export default LibraryRoutes;
