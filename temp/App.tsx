/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { default as theme } from '@/assets/kitten/custom-theme.json';
import { mapping } from '@/assets/kitten/mapping';
import { navigationRef } from '@/core/stacks/NavigationService';

import Stacks from './src/core/stacks';
import { store } from './src/core/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={{ ...eva.mapping, ...mapping }}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
          <Stacks />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;
