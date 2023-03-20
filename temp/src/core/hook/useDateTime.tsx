import { useModal } from 'react-native-modalfy';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { TModeDateTime } from '@/components/Modal/ModalDateTime';

import { IModalStackParamsList } from '../stacks/type';
import { isAndroid } from '../theme';

interface IProps {
  mode: TModeDateTime;
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
  initialDate: Date;
}

export const useDateTime = () => {
  const { openModal } = useModal<IModalStackParamsList>();

  const showDateTime = ({ mode, onChange, initialDate }: IProps) => {
    if (isAndroid) {
      DateTimePickerAndroid.open({
        value: initialDate,
        onChange,
        mode,
        minimumDate: new Date(),
      });
    } else {
      openModal('ModalDateTime', {
        onChange,
        initialDate,
        minDate: new Date(),
        mode,
      });
    }
  };

  return { showDateTime };
};
