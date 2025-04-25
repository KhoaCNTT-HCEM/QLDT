import { React, useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './AccountSetting.css'
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Button, Col, DatePicker, Form, Input, Row, Select, message } from "antd";

const AccountSetting = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [formData, setFormData] = useState({
    position: "",
    avatar: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    username: "",
  });

  const [fileList, setFileList] = useState([]);
  const handleChangeFile = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const onChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Avatar</div>
    </button>
  );
  return (
    <div className="accountsetting">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="username"
              label="Tên Giáo Viên"
              rules={[{ required: true, message: 'Vui lòng nhập tên giáo viên!' }]}
            >
              <Input
                placeholder="Vui lòng nhập tên giáo viên!"
                onChange={(e) => onChange('username', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="position"
              label="Chức Vụ"
              rules={[{ required: true, message: 'Vui lòng nhập chức vụ!' }]}
            >
              <Input
                placeholder="Vui lòng nhập chức vụ!"
                onChange={(e) => onChange('position', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <Input
                placeholder="Vui lòng nhập email!"
                onChange={(e) => onChange('email', e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="phoneNumber"
              label="Số Điện Thoại"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
              <Input
                placeholder="Vui lòng nhập số điện thoại!"
                onChange={(e) => onChange("phoneNumber", e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="dateOfBirth"

              label="Ngày Sinh"
              rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
            >
              <DatePicker
                onChange={(date) => onChange("dateOfBirth", date)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Upload
              className="avatar"
              listType="picture-circle"
              fileList={fileList}
              // onPreview={handlePreview}
              onChange={handleChangeFile}
              beforeUpload={() => false}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Col>
          <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
            <Button type="primary"  >
              Xác Nhận
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  )
}

export default AccountSetting