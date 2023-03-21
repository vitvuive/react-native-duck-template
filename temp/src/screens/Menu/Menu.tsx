import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Icon, Layout, Text } from '@ui-kitten/components';

import { ButtonIcon, Container, Row } from '@/components';
import NavigationService from '@/core/stacks/NavigationService';
import { useAppDispatch } from '@/core/store';
import { globalSlice } from '@/core/store/global/globalReducer';
import { CommonSizes } from '@/core/theme';

const AVATAR_URL =
  'https://d3u2xd68tejot5.cloudfront.net/images/288.1667184489.a461adaf-1326-4c47-8180-006f954cdb72jpg.jpg.webp';

const MEMU = [
  {
    iconName: 'question-mark-circle-outline',
    title: 'Question',
  },

  {
    iconName: 'message-circle-outline',
    title: 'Contact',
  },
  {
    iconName: 'person-delete-outline',
    title: 'Delete account',
  },
];

const Menu = () => {
  const dispatch = useAppDispatch();

  const onLogOut = () => dispatch(globalSlice.actions.setIsLogin(false));

  return (
    <Container style={styles.container}>
      <View>
        <Layout
          level="2"
          style={[
            styles.cartContainer,
            { marginBottom: CommonSizes.spacing.largePlus },
          ]}>
          <Row
            justifyContent="space-between"
            style={{ marginBottom: CommonSizes.spacing.medium }}>
            <Text category="h6">{'Account'}</Text>

            <ButtonIcon
              onPress={() => NavigationService.navigate('Notification')}
              name={'bell-outline'}
            />
          </Row>
          <Row>
            <Avatar size="giant" source={{ uri: AVATAR_URL }} />
            <Text
              style={{ marginLeft: CommonSizes.spacing.medium }}
              category="p1">
              {'acb@gmail.com'}
            </Text>
          </Row>
        </Layout>
        <Layout level="2" style={styles.cartContainer}>
          <Text
            style={{ marginBottom: CommonSizes.spacing.extraSmall }}
            category="h6">
            {'Help'}
          </Text>
          {MEMU.map((item) => (
            <Row key={item.title} style={styles.itemContainer}>
              <Icon style={styles.icon} name={item.iconName} />
              <Text category="p2">{item.title}</Text>
            </Row>
          ))}
        </Layout>
      </View>

      <Button appearance="ghost" status="danger" onPress={onLogOut}>
        {'Log out'}
      </Button>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CommonSizes.spacing.medium,
    justifyContent: 'space-between',
  },
  cartContainer: {
    borderRadius: CommonSizes.borderRadius.large,
    padding: CommonSizes.spacing.medium,
  },
  icon: { width: 20, height: 20, marginRight: CommonSizes.spacing.small },
  itemContainer: { marginVertical: 12 },
  sectionTitle: {
    marginBottom: CommonSizes.spacing.extraSmall,
    marginTop: 50,
  },
});
