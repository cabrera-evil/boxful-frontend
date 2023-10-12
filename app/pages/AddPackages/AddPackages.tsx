import React from 'react';
import { Button, Typography } from 'antd';
import PackageDetails from './components/PackageDetails';
import PackageCard from './components/PackageCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { IOrder } from '../CreateOrder/interface/Order.interface';
import { IPackage } from './interface/Package.interface';

const { Title, Text } = Typography;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column', // Make it a column layout
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
  height: '100vh',
};

const titleTextStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#4D5568',
};

const textStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#7682A0',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const continueButtonStyle: React.CSSProperties = {
  background: '#4270F9',
  color: '#FFFFFF',
  width: '45%',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  border: '2px #2F5CDF solid',
  marginTop: '2rem',
};

const backButtonStyle: React.CSSProperties = {
  background: '#FFFFFF',
  color: '#4270F9',
  width: '45%',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  border: '2px #2F5CDF solid',
  marginTop: '2rem',
};

export default function AddPackages() {
  return (
    <div style={containerStyle}>
      <div>
        <Title level={2} style={titleTextStyle}>
          Crea una orden
        </Title>
        <Text style={textStyle}>
          Dale una ventaja competitiva a tu negocio con entregas el mismo día (Área Metropolitana) y el día siguiente a nivel nacional.
        </Text>
        <div style={{ backgroundColor: 'white' }}>
          <PackageDetails />
          <div style={buttonContainerStyle}>
            <Button type="primary" style={backButtonStyle} htmlType="submit">
              <LeftOutlined /> Regresar
            </Button>
            <Button type="primary" style={continueButtonStyle} htmlType="submit">
              Enviar <RightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
