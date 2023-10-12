import React from 'react';
import { Input, Form, Button, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const formStyle: React.CSSProperties = {
  backgroundColor: '#F3F5F9',
  padding: '75px',
  borderRadius: '8px',
  border: '1px #E4E8F1 dotted',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column' as 'column',
};

const inputStyle: React.CSSProperties = {
  background: '#FFFFFF',
  color: '#454A55',
  width: '100%',
  height: '100%',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  border: '1px #E0E3E8 solid',
};

const buttonStyle: React.CSSProperties = {
  width: '25%',
  height: '100%',
  background: '#ECEEF1',
  color: '#7682A0',
  borderRadius: 10,
  border: '2px #E1E4EC solid',
  marginTop: 'auto',
  alignSelf: 'flex-end',
};

export default function PackageDetails() {
  return (
    <Form layout="vertical" style={formStyle}>
      <Row gutter={16}>
        <Col span={3}>
          <Form.Item label="Largo" name="large" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Largo" style={inputStyle} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Alto" name="height" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Alto" style={inputStyle} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Ancho" name="width" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Ancho" style={inputStyle} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Peso en libras" name="weight" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Peso" style={inputStyle} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Contenido" name="content" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="Contenido" style={inputStyle} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="default" style={buttonStyle} htmlType="submit">
        Agregar <PlusOutlined />
      </Button>
    </Form>
  );
}
