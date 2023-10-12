import React from 'react';
import { Input, Form, Button, Col, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const formStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '75px',
  borderRadius: '8px',
  border: '1px #3EBF5B solid',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column' as 'column',
  position: 'relative',
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

const deleteButtonStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '16px',
  right: '16px',
};

export default function PackageList() {
  return (
    <Form layout="vertical" style={formStyle}>
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="Peso en libras" name="weight">
            <Input placeholder="Peso" style={inputStyle} disabled={true} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Contenido" name="content">
            <Input placeholder="Contenido" style={inputStyle} disabled={true} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Largo">
            <Input placeholder="Largo" style={inputStyle} disabled={true} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Ancho" name="width">
            <Input placeholder="Ancho" style={inputStyle} disabled={true} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Alto" name="height">
            <Input placeholder="Alto" style={inputStyle} disabled={true} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" danger style={deleteButtonStyle}>
        <DeleteOutlined />
      </Button>
    </Form>
  );
}
