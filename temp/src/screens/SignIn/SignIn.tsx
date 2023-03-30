import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from '@ui-kitten/components';

import { Images } from '@/assets';
import Container from '@/components/Container';
import { trans } from '@/core/i18n';
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
        <Image source={Images.duckLogo} style={styles.logo} />
      </View>
      <View style={styles.headerContainer}>
        <Text category="h4">Log in and let's swimming</Text>
        <Button onPress={onSaga}>{trans('continueWithGoogle')}</Button>

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
            placeholder={trans('password')}
            style={{ marginVertical: CommonSizes.spacing.medium }}
          />

          <Button status="basic">{trans('login')}</Button>
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
    padding: CommonSizes.spacing.mediumPlus,
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
    height: 80,
    width: 80,
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
