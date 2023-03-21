import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import { Container } from '@/components';

const Home = () => {
  return (
    <Container style={styles.container}>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
