'use client';

import React from 'react';
import { Layout, Space } from 'antd';
import CustomHeader from './components/header/Header';
import Form from './pages/form/Form';
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={{ backgroundColor: 'white' }}>
        <CustomHeader />
      </Header>
      <Content>
        <Form />
      </Content>
    </Layout>
  </Space>
);

export default App;
