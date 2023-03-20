import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewStyle } from 'react-native';

interface IProps {
  children: React.ReactNode;
  style?: ViewStyle;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const Row = ({ children, style, justifyContent }: IProps) => {
  return (
    <View style={[styles.container, style, { justifyContent }]}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
