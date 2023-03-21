import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notification from '@/screens/Notification/Notification';

import BottomTab from './BottomTab';
import { TMainParamList } from './type';

const Main = createNativeStackNavigator<TMainParamList>();

const MainStack = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="BottomTab" component={BottomTab} />
      <Main.Screen name="Notification" component={Notification} />
    </Main.Navigator>
  );
};

export default MainStack;
