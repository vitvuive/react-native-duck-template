import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

import { TopBar } from '@/components/TopBar';

const Notification = () => {
  return (
    <>
      <TopBar title="Notification" />
      <Layout style={styles.container}>
        <Text>Notification</Text>
      </Layout>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
