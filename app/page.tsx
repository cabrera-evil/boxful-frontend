'use client';

import React from 'react';
import { Layout, Space } from 'antd';
import CustomHeader from './Header/Header';
import CreateOrder from './CreateOrder/page';
import axios from 'axios';
const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#DEE1E7',
};

axios.defaults.baseURL = 'http://localhost:3000/api'

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <CustomHeader />
      </Header>
      <Content style={contentStyle}>
        <CreateOrder />
      </Content>
    </Layout>
  </Space>
);

export default App;
