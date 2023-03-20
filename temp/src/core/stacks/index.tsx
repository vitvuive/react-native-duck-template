import React from 'react';
import {
  createModalStack,
  ModalProvider,
  ModalStackConfig,
} from 'react-native-modalfy';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalDateTime from '@/components/Modal/ModalDateTime';
import Introduce from '@/screens/Introduce';

import { useAppSelector } from '../store';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { IModalStackParamsList, TStackParamList } from './type';

const Stack = createNativeStackNavigator<TStackParamList>();

const defaultOptions = { backdropOpacity: 0.5 };

const modalConfig: ModalStackConfig = {
  ModalDateTime: {
    modal: ModalDateTime,
    backdropOpacity: 0.2,
  },
};

const Stacks = () => {
  const {
    global: { isIntroLoaded, isLogin },
  } = useAppSelector((state) => state);

  const stackModal = createModalStack<IModalStackParamsList>(
    modalConfig,
    defaultOptions,
  );

  return (
    <ModalProvider /*  */ stack={stackModal}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isIntroLoaded ? (
          <Stack.Screen name="Introduce" component={Introduce} />
        ) : (
          <>
            {isLogin ? (
              <Stack.Screen name="MainStack" component={MainStack} />
            ) : (
              <Stack.Screen name="AuthStack" component={AuthStack} />
            )}
          </>
        )}
      </Stack.Navigator>
    </ModalProvider>
  );
};

export default Stacks;
