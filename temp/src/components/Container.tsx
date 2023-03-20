import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Layout, LayoutProps } from '@ui-kitten/components';

interface IProps extends LayoutProps {}

const Container = (props: IProps) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <Layout style={[{ paddingTop: top }, props.style]}>{props.children}</Layout>
  );
};

export default Container;
