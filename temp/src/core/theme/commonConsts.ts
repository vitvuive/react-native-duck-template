import { Dimensions, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const widthScreen = Dimensions.get('screen').width;
export const heightScreen = Dimensions.get('screen').height;
