import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import NavigationService from '@/core/stacks/NavigationService';

interface IProps {
  title?: string;
  subtitle?: string;
  renderRightActions?: () => React.ReactElement;
  backIcon?: string;
  onBack?: () => void;
}

export const TopBar = ({
  title,
  subtitle,
  renderRightActions,
  backIcon = 'arrow-ios-back-outline',
  onBack,
}: IProps) => {
  const { top } = useSafeAreaInsets();

  const onPress = () => {
    onBack ? onBack() : NavigationService.goBack();
  };

  const renderBackAction = () => (
    <TopNavigationAction
      onPress={onPress}
      icon={(props: any) => <Icon {...props} name={backIcon} />}
    />
  );

  return (
    <Layout style={[styles.container, { paddingTop: top }]} level="1">
      <TopNavigation
        alignment="center"
        title={title}
        subtitle={subtitle}
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
  },
});
