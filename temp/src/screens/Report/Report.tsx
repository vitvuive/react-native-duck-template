import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Container } from '@/components';

const Report = () => {
  return (
    <Container style={styles.container}>
      <Text>Report</Text>
    </Container>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
