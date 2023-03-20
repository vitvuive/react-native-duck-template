import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';

import { Colors } from '@/core/theme';

interface IProps {
  name: string;
  onPress: () => void;
  backgroundColor?: string;
  size?: number;
}

const ButtonIcon = ({ name, onPress, backgroundColor, size = 22 }: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Colors.gray
            : backgroundColor || Colors.transparent,
        },
        styles.wrapperCustom,
      ]}>
      <Icon name={name} style={{ width: size, height: size }} />
    </Pressable>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
  },
});
