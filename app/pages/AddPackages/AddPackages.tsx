import React from 'react';
import { Typography } from 'antd';
import PackageDetails from './components/PackageDetails';
import PackageList from './components/PackageList';

const { Title, Text } = Typography;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100vh',
  marginTop: '20px',
};

const titleTextStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#4D5568',
};

const textStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#7682A0',
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
        <div>
          <PackageDetails />
          {/* <PackageList /> */}
        </div>
      </div>
    </div>
  );
}
