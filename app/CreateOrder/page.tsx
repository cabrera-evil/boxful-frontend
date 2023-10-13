'use client'

import React, { useState } from 'react';
import { Typography, Input, Form, DatePicker, Row, Col, Button, Select, notification } from 'antd';
import './helpers/CustomDatePicker.css';
import { EnvironmentOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography;
const { Option } = Select;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100vh',
  marginTop: '20px',
};

const formStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '75px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column' as 'column',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'white',
  borderRadius: 10,
};

const buttonStyle: React.CSSProperties = {
  width: '25%',
  height: '100%',
  background: '#4270F9',
  borderRadius: 10,
  border: '2px #2F5CDF solid',
  marginTop: 'auto',
  alignSelf: 'flex-end',
};

const titleTextStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#4D5568',
};

const textStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#7682A0',
};

const departments: string[] = ['San Salvador', 'Santa Ana', 'San Miguel', 'La Libertad', 'Ahuachapán']; // Add more if needed
const municipalities: { [key: string]: string[] } = {
  'San Salvador': ['San Salvador', 'Soyapango', 'Santa Tecla', 'Apopa'],
  'Santa Ana': ['Santa Ana', 'Metapán', 'Chalchuapa', 'Atiquizaya'],
  'San Miguel': ['San Miguel', 'Usulután', 'Morazán', 'La Unión'],
  'La Libertad': ['La Libertad', 'Santa Tecla', 'Antiguo Cuscatlán'],
  'Ahuachapán': ['Ahuachapán', 'Sonsonate', 'Atiquizaya'],
};

const centralAmericanCountries: { label: string; value: string }[] = [
  { label: '🇸🇻 (+503)', value: '+503' },
  { label: '🇬🇹 (+502)', value: '+502' },
  { label: '🇭🇳 (+504)', value: '+504' },
  { label: '🇳🇮 (+505)', value: '+505' },
  { label: '🇨🇷 (+506)', value: '+506' },
  { label: '🇵🇦 (+507)', value: '+507' },
];

export default function CreateOrder() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>(departments[0]);
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>(municipalities[departments[0]][0]);
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string }>(centralAmericanCountries[0]);
  const router = useRouter();

  const handleSubmit = (values: any) => {
    if (isFormComplete(values)) {
      // Format the date to '2023-10-15T14:00:00Z' format
      const formattedDate = values.scheduledDate.toISOString();
  
      // Replace the original date with the formatted date
      values.scheduledDate = formattedDate;

      // Order template
      const order = {
        pickupAddress: values.pickupAddress,
        scheduledDate: values.scheduledDate,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        deliveryAddress: values.deliveryAddress,
        department: values.department,
        municipality: values.municipality,
        referencePoint: values.referencePoint,
        specialInstructions: values.specialInstructions,
        items: [],
      }
      
      // Save to local storage
      localStorage.setItem('orderData', JSON.stringify(order));

      // Redirect to packages
      router.push('/AddPackages');
    } else {
      notification.error({
        message: 'Form Error',
        description: 'Please fill out all fields before submitting.',
      });
    }
  };
  

  const isFormComplete = (values: any) => {
    return (
      values.pickupAddress &&
      values.scheduledDate &&
      values.firstName &&
      values.lastName &&
      values.email &&
      values.phone &&
      values.deliveryAddress &&
      values.department &&
      values.municipality
    );
  };

  return (
    <div style={containerStyle}>
      <div>
        <Title level={2} style={titleTextStyle}>
          Crea una orden
        </Title>
        <Text style={textStyle}>
          Dale una ventaja competitiva a tu negocio con entregas el mismo día (Área Metropolitana) y el día siguiente a nivel nacional.
        </Text>

        <Form layout="vertical" style={formStyle} onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="📍 Dirección de recolección" name="pickupAddress" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="Calle 123, Ciudad" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="📅 Fecha Programada" name="scheduledDate" rules={[{ required: true, message: 'This field is required' }]}>
                <DatePicker style={inputStyle} placeholder="Selecciona una fecha" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Nombres" name="firstName" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="Juan" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Apellidos" name="lastName" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="Pérez" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Correo Electrónico" name="email" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="correo@example.com" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Teléfono" name="phone" rules={[{ required: true, message: 'This field is required' }]}>
                <div style={{ display: 'flex' }}>
                  <Select
                    value={selectedCountry}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                  >
                    {centralAmericanCountries.map((country) => (
                      <Option key={country.value} value={country.value}>
                        {country.label}
                      </Option>
                    ))}
                  </Select>
                  <Input style={inputStyle} placeholder="456-7890" />
                </div>
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label="Dirección del destinatario" name="deliveryAddress" rules={[{ required: true, message: 'This field is required' }]}>
                <Input
                  style={inputStyle}
                  placeholder="Calle 456, Ciudad"
                  prefix={<EnvironmentOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Departamento" name="department" rules={[{ required: true, message: 'This field is required' }]}>
                <Select
                  style={inputStyle}
                  value={selectedDepartment}
                  onChange={(value) => setSelectedDepartment(value)}
                  placeholder="Selecciona un departamento"
                >
                  {departments.map((department) => (
                    <Option key={department} value={department}>
                      {department}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Municipio" name="municipality" rules={[{ required: true, message: 'This field is required' }]}>
                <Select
                  style={inputStyle}
                  value={selectedMunicipality}
                  onChange={(value) => setSelectedMunicipality(value)}
                  placeholder="Selecciona un municipio"
                >
                  {municipalities[selectedDepartment].map((municipality) => (
                    <Option key={municipality} value={municipality}>
                      {municipality}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Punto de Referencia" name="referencePoint" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="Cerca de la plaza" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Indicaciones" name="specialInstructions" rules={[{ required: true, message: 'This field is required' }]}>
                <Input style={inputStyle} placeholder="Entregar en la puerta trasera" />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" style={buttonStyle} htmlType="submit">
            Siguiente <RightOutlined />
          </Button>
        </Form>
      </div>
    </div>
  );
}
