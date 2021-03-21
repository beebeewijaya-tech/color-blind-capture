import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './stacks/Main.stack';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
