import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { TModeDateTime } from '@/components/Modal/ModalDateTime';

export type TStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
  Introduce: undefined;
};

export type TAuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type TBottomTabParamList = {
  Home: undefined;
  Menu: undefined;
  Report: undefined;
};

export interface IModalStackParamsList {
  ModalDateTime: {
    onChange?: (event: DateTimePickerEvent, date?: Date) => void;
    mode?: TModeDateTime;
    initialDate: Date;
    minDate?: Date;
    maxDate?: Date;
  };
}

export type TMainParamList = {
  BottomTab: undefined;
  Profile: undefined;
  Notification: undefined;
};
