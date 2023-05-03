import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRoutes from './home/routes';
import LibraryRoutes from './library/routes';
import ConfigsRoutes from './configs/routes';

const Tab = createBottomTabNavigator();

const ScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const Routes = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={'HomeNavigator'}>
      <Tab.Screen name={'HomeNavigator'} component={HomeRoutes} options={ScreenOptions} />
      <Tab.Screen name={'LibraryNavigator'} component={LibraryRoutes} options={ScreenOptions} />
      <Tab.Screen name={'ConfigsNavigator'} component={ConfigsRoutes} options={ScreenOptions} />
    </Tab.Navigator>
  );
};

export default Routes;
