import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Main } from '../screens/Main';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Main" component={Main} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};
