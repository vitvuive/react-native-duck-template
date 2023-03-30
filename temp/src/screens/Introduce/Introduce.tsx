import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

import { Images } from '@/assets';
import { trans } from '@/core/i18n';
import { useAppDispatch } from '@/core/store';
import { globalSlice } from '@/core/store/global/globalReducer';
import { CommonSizes } from '@/core/theme/commonSizes';

const Introduce = () => {
  const dispatch = useAppDispatch();
  const onPress = () => dispatch(globalSlice.actions.setIntroLoaded(true));

  return (
    <Layout style={styles.container}>
      <View style={styles.logoView}>
        <Image source={Images.duckLogo} style={styles.logo} />
      </View>

      <Layout style={styles.containerBottom}>
        <Text category="h2" style={styles.desc}>
          {trans('welcome')}
        </Text>
        <Text category="s1" style={{ textAlign: 'center' }}>
          {trans('welcomeDesc')}
        </Text>
        <Button onPress={onPress}>{trans('start')}</Button>
      </Layout>
    </Layout>
  );
};

export default Introduce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  containerBottom: {
    paddingHorizontal: CommonSizes.spacing.large,
    flex: 1,
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
