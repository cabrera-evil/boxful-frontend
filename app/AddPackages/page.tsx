'use client'

import React, { useState } from 'react';
import { Button, Typography, notification } from 'antd';
import PackageDetails from './components/PackageDetails';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { OrderService } from '../CreateOrder/services/Order.service';

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
  const [submittedPackageData, setSubmittedPackageData] = useState<any | undefined>();
  const router = useRouter();
  const orderService = new OrderService();

  // Define una callback function para recibir datos de PackageDetails
  function handlePackageData(data: any) {
    setSubmittedPackageData(data);
  }

  function handleBack(event: React.MouseEvent<HTMLElement>): void {
    router.back();
  }

  function handleSend(event: React.MouseEvent<HTMLElement>): void {
    if (submittedPackageData) {
      // Get from local storage and parse to JSON, then add the new package
      const order = JSON.parse(localStorage.getItem('orderData') || '[]');

      // Add the new package to the order.items[]
      order.items.push(submittedPackageData);

      orderService.createOrder(order);

      notification.success({
        message: '¡Orden creada!',
        description: 'Tu orden ha sido creada exitosamente.',
      });
    } else {
      notification.error({
        message: '¡Error!',
        description: 'No se ha podido crear tu orden.',
      });
    }
  }

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
          <PackageDetails onPackageData={handlePackageData} />
          <div style={buttonContainerStyle}>
            <Button type="primary" style={backButtonStyle} htmlType="submit" onClick={handleBack}>
              <LeftOutlined /> Regresar
            </Button>
            <Button type="primary" style={continueButtonStyle} htmlType="submit" onClick={handleSend}>
              Enviar <RightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
