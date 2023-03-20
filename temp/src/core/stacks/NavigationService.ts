import React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
  TabActions,
} from '@react-navigation/native';

import { TAuthParamList, TMainParamList, TStackParamList } from './type';

type TParamList = TAuthParamList & TMainParamList & TStackParamList;

export const navigationRef =
  React.createRef<NavigationContainerRef<TParamList>>();

function navigate<RouteName extends keyof TParamList>(
  ...args: RouteName extends unknown
    ? undefined extends TParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: TParamList[RouteName]]
      : [screen: RouteName, params: TParamList[RouteName]]
    : never
) {
  navigationRef.current?.navigate(...args);
}

function push<RouteName extends keyof TParamList>(
  ...args: RouteName extends unknown
    ? undefined extends TParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: TParamList[RouteName]]
      : [screen: RouteName, params: TParamList[RouteName]]
    : never
) {
  navigationRef.current?.dispatch(
    StackActions.push(args[0], args[1] && args[1]),
  );
}

function replace<RouteName extends keyof TParamList>(
  ...args: RouteName extends unknown
    ? undefined extends TParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: TParamList[RouteName]]
      : [screen: RouteName, params: TParamList[RouteName]]
    : never
) {
  navigationRef.current?.dispatch(
    StackActions.replace(args[0], args[1] && args[1]),
  );
}

function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

function pop(step: number) {
  const popAction = StackActions.pop(step);
  navigationRef.current?.dispatch(popAction);
}

function jumpTo(routeName: string) {
  navigationRef?.current?.dispatch(TabActions.jumpTo(routeName));
}

export default {
  jumpTo,
  pop,
  goBack,
  replace,
  push,
  navigate,
};
