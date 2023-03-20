import { Platform, StyleSheet, ViewStyle } from 'react-native';

import { CommonSizes } from './commonSizes';
export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  } as ViewStyle,
  flex1Padding: {
    flex: 1,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  flexColumnCenterStretch: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  } as ViewStyle,

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  columnAlignStart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as ViewStyle,
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      } as ViewStyle,
      android: {
        elevation: 4,
      } as ViewStyle,
    }),
  } as ViewStyle,
});
