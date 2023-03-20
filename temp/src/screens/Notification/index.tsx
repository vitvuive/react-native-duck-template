import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

import { TopBar } from '@/components/TopBar';

const Notification = () => {
  return (
    <>
      <TopBar title="Thông báo" />
      <Layout style={{ flex: 1 }}>
        <Text>Tính năng mới: đánh giất trận cần cáp kèo</Text>
      </Layout>
    </>
  );
};

export default Notification;
