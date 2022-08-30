import { Layout, Input, Button, Form } from "antd";
import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
import SideMenu from "../components/sandbox/SideMenu";
import TopHeader from "../components/sandbox/TopHeader";
import "./NewsSandBox.css";
const { Content } = Layout;
// import Home from './Home';
// import RightList from '../components/sandbox/RightList';
// import UserList from './UserList';

export default function NewsSandBox() {
  const [inputText, setInputText] = useState({});
  const onFinish = (values) => {
    setInputText(values)
  };
  console.log('inputText',inputText)
  return (
    <Layout>
      <SideMenu inputText={inputText}></SideMenu>
      <Layout>
        <TopHeader></TopHeader>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "#fff",
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="编辑侧面菜单"
              name="username"
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      {/* <Routes>
         <Route path='userManage/list' element={<UserList/>}/>
         <Route path='/rightManage' element={<RightList/>}/>
      </Routes> */}
    </Layout>
  );
}
