import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../common/colors';

import HomeRoutes from './home/routes';
import LibraryRoutes from './library/routes';
import AboutRoutes from './about/routes';
import { Icons } from '../common/icons';

const Tab = createBottomTabNavigator();

const TabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.text,
  tabBarInactiveTintColor: colors.text_inactive,
  tabBarStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 0,
    height: 60,
  },
  tabBarLabelStyle: {
    height: 20,
  },
};

const Routes = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={'ConfigsNavigator'} screenOptions={TabOptions}>
      <Tab.Screen
        name={'HomeNavigator'}
        component={HomeRoutes}
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <Icons.Navigation.Home color={focused ? colors.text : colors.text_inactive} height={22} width={22} />
          ),
        }}
      />
      <Tab.Screen
        name={'LibraryNavigator'}
        component={LibraryRoutes}
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ focused }) => (
            <Icons.Navigation.Library color={focused ? colors.text : colors.text_inactive} height={22} width={22} />
          ),
        }}
      />
      <Tab.Screen
        name={'AboutNavigator'}
        component={AboutRoutes}
        options={{
          title: 'Sobre',
          tabBarIcon: ({ focused }) => (
            <Icons.Navigation.About color={focused ? colors.text : colors.text_inactive} height={22} width={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
