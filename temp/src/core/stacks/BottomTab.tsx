import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

import Home from '@/screens/Home/Home';
import Menu from '@/screens/Menu/Menu';
import Report from '@/screens/Report/Report';

import { Colors, CommonSizes } from '../theme';

import { TBottomTabParamList } from './type';

const Tab = createBottomTabNavigator<TBottomTabParamList>();

const HomeIcon = (props: any) => <Icon {...props} name="calendar-outline" />;
const ChartIcon = (props: any) => (
  <Icon {...props} name="trending-up-outline" />
);
const GridIcon = (props: any) => <Icon {...props} name="menu-outline" />;

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomNavigation
      indicatorStyle={styles.indicatorStyle}
      style={[
        {
          paddingBottom: bottom,
        },
        styles.bottomContainer,
      ]}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={ChartIcon} />
      <BottomNavigationTab icon={GridIcon} />
    </BottomNavigation>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray,
    paddingVertical: CommonSizes.spacing.small,
  },
  indicatorStyle: {
    height: 3,
    borderRadius: 5,
  },
});
