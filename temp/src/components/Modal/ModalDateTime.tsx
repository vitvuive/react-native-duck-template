import React from 'react';
import { StyleSheet } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Layout } from '@ui-kitten/components';

import { IModalStackParamsList } from '@/core/stacks/type';
import { Colors, CommonSizes } from '@/core/theme';

type Props = ModalComponentProp<IModalStackParamsList, void, 'ModalDateTime'>;

export type TModeDateTime = 'time' | 'date';

const ModalCalendar: React.FC<Props> = ({ modal: { params } }) => {
  return (
    <Layout style={styles.container}>
      <DateTimePicker
        minimumDate={params?.minDate}
        maximumDate={params?.maxDate}
        accentColor={Colors.primary}
        value={params?.initialDate ?? new Date()}
        onChange={params?.onChange}
        mode={params?.mode ?? 'date'}
        display={params?.mode === 'time' ? 'spinner' : 'inline'}
      />
    </Layout>
  );
};

export default ModalCalendar;

const styles = StyleSheet.create({
  container: {
    padding: CommonSizes.spacing.extraSmall,
    borderRadius: CommonSizes.borderRadius.medium,
    backgroundColor: 'white',
  },
});
