import React, { useEffect, useState } from 'react';
import { Input, Form, Button, Col, Row, Select } from 'antd';
const { Option } = Select;
import { PlusOutlined } from '@ant-design/icons';
import { PackageService } from '../services/Package.service';
import PackageCard from './PackageCard';
import { IPackage } from '../interface/Package.interface';

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

interface PackageDetailsProps {
  onPackageData: (data: any) => void;
}

export default function PackageDetails({ onPackageData }: PackageDetailsProps) {
  const packageService = new PackageService();
  const [packages, setPackages] = useState<any[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState<IPackage>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await packageService.getPackages();
        setPackages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function handleSubmit(values: IPackage): void {
    form.resetFields();
    setSelectedPackage('');

    // Render package data with <PackageCard />
    onPackageData(values);
    setSubmittedData(values);
  }
  const handlePackageSelect = (value: string) => {
    const selectedPackageData = packages.find((data) => data.content === value);

    form.setFieldsValue({
      length: selectedPackageData?.length || undefined,
      weightInPounds: selectedPackageData?.weightInPounds || undefined,
      height: selectedPackageData?.height || undefined,
      width: selectedPackageData?.width || undefined,
    });

    setSelectedPackage(value);
  };

  return (
    <div>
      <Form layout="vertical" style={formStyle} onFinish={handleSubmit} form={form}>
        <Row gutter={16}>
          <Col span={3}>
            <Form.Item label="Largo" name="length" rules={[{ required: true, message: 'This field is required' }]}>
              <Input placeholder="Largo" style={inputStyle} disabled={true} />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Alto" name="height" rules={[{ required: true, message: 'This field is required' }]}>
              <Input placeholder="Alto" style={inputStyle} disabled={true} />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Ancho" name="width" rules={[{ required: true, message: 'This field is required' }]}>
              <Input placeholder="Ancho" style={inputStyle} disabled={true} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Peso en libras" name="weightInPounds" rules={[{ required: true, message: 'This field is required' }]}>
              <Input placeholder="Peso" style={inputStyle} disabled={true} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Contenido" name="content" rules={[{ required: true, message: 'This field is required' }]}>
              <Select
                value={selectedPackage}
                placeholder="Seleccione un contenido"
                style={inputStyle}
                onChange={handlePackageSelect}
              >
                {packages.map((data) => (
                  <Option key={data._id} value={data.content}>
                    {data.content}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Button type="default" style={buttonStyle} htmlType="submit">
          Agregar <PlusOutlined />
        </Button>
      </Form>
      {submittedData && (
        <PackageCard data={submittedData} />
      )}
    </div>
  );
}
