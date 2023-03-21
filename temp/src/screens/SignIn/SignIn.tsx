import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from '@ui-kitten/components';

import Container from '@/components/Container';
import { signInAsync } from '@/core/store/auth/authReducer';
import { Colors, CommonSizes } from '@/core/theme';

import { useAppDispatch } from '../../core/store';

const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSaga = () => {
    dispatch(signInAsync());
  };

  return (
    <Container style={styles.container}>
      <View style={styles.logoView}>
        <Text>LOGO APP</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text category="h4">Log in and let's swimming</Text>
        <Button onPress={onSaga}>Continue with Google</Button>

        <Text style={{ textAlign: 'center' }}>Or use email</Text>

        <View>
          <Input
            size="large"
            status="basic"
            accessoryLeft={(props) => <Icon {...props} name="email-outline" />}
            placeholder="Email"
          />
          <Input
            size="large"
            status="basic"
            accessoryLeft={(props) => <Icon {...props} name="lock-outline" />}
            placeholder="Password"
            style={{ marginVertical: CommonSizes.spacing.medium }}
          />

          <Button status="basic">Login</Button>
        </View>

        <Text style={{ textAlign: 'center' }}>
          Don't have registration? <Text category="s1">Register now</Text>
        </Text>
      </View>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: CommonSizes.spacing.medium,
  },
  logoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  formContainer: {
    flex: 1,
    marginBottom: 40,
  },
  inputPassword: {
    marginTop: 16,
  },
  logo: {
    height: 300,
    width: '100%',
  },
  btnView: {
    paddingHorizontal: CommonSizes.spacing.large,
  },
  desc: {
    fontSize: CommonSizes.font.medium,
    textAlign: 'center',
    paddingHorizontal: CommonSizes.spacing.large,
  },
  btnText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});
