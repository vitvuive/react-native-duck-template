import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

import { Icons } from '@/assets';
import Container from '@/components/Container';
import { signInAsync } from '@/core/store/auth/authReducer';
import { Colors, CommonSizes } from '@/core/theme';

import { useAppDispatch } from '../../core/store';

const LogoApple = (props) => (
  <Icons.LogoApple height={20} width={20} {...props} />
);

const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSaga = () => {
    dispatch(signInAsync());
  };

  return (
    <Container style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h2">App</Text>
      </View>

      <View style={styles.btnView}>
        <Button
          accessoryLeft={LogoApple}
          appearance="outline"
          style={{ backgroundColor: Colors.white, borderColor: Colors.black }}
          onPress={onSaga}>
          {(evaProps) => (
            <Text {...evaProps} style={styles.btnText}>
              Đăng nhập bằng Apple
            </Text>
          )}
        </Button>
      </View>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
