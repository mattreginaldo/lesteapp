import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '~/screens/signin';


const Stack = createStackNavigator();

export default function AuthenticationRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signin" component={SignIn} />
    </Stack.Navigator>
  );
}
