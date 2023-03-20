import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

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
        <Text status="control" appearance="hint" style={styles.desc}>
          {'Mô tả app'}
        </Text>
        <Button status="control" onPress={onPress}>
          Next
        </Button>
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
    width: '100%',
    height: 300,
  },
  containerBottom: {
    paddingHorizontal: CommonSizes.spacing.large,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    backgroundColor: Colors.primary,
    height: '40%',
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
    fontSize: CommonSizes.font.extraLarge,
    fontWeight: '600',
  },
  desc: {
    textAlign: 'center',
    fontSize: CommonSizes.font.mediumPlus,
  },
});
