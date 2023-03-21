import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import { Images } from '@/assets';
import { Colors } from '@/core/theme/colors';
import { CommonSizes } from '@/core/theme/commonSizes';

import { useAppDispatch } from '../../core/store';
import { globalSlice } from '../../core/store/global/globalReducer';

const Introduce = () => {
  const dispatch = useAppDispatch();
  const onPress = () => dispatch(globalSlice.actions.setIntroLoaded(true));
  return (
    <Layout style={styles.container}>
      <Layout style={styles.containerBottom}>
        <Text category="h2" style={styles.desc}>
          {'Welcome to Duck'}
        </Text>
        <Text category="s1" style={{ textAlign: 'center' }}>
          {'A template you application for start quickly!'}
        </Text>
        <Button onPress={onPress}>Start</Button>
      </Layout>
    </Layout>
  );
};

export default Introduce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '30%',
    height: '30%',
  },
  containerBottom: {
    paddingHorizontal: CommonSizes.spacing.large,
    height: '35%',
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
    fontSize: CommonSizes.font.extraLarge,
    fontWeight: '600',
  },
  desc: {
    textAlign: 'center',
  },
});
