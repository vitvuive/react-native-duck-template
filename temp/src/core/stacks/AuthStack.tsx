import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../../screens/SignIn';

import { TAuthParamList } from './type';

const Auth = createNativeStackNavigator<TAuthParamList>();

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
};

export default AuthStack;
