import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import SpendLimit from '../pages/SpendLimit';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SpendLimit" component={SpendLimit} />
    </Stack.Navigator>
  );
};

export default Navigation;
