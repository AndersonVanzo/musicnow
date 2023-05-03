import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Library from '../../screens/library/library';

const Stack = createStackNavigator();

const LibraryRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'LibraryScreen'} component={Library} />
    </Stack.Navigator>
  );
};

export default LibraryRoutes;
