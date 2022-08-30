import React from 'react'
import { Layout, Avatar } from 'antd';
import {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
    // const [collapsed, setCollapsed] = useState(false);
    // const changeCollapsed = () =>{
    //     setCollapsed(!collapsed)
    // }
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px', backgroundColor: "#fff",display:"flex",flexDirection:"row-reverse"}}>
    <div>
    {/* {
        collapsed ? <MenuUnfoldOutlined  onClick={changeCollapsed}/> : <MenuFoldOutlined onClick={changeCollapsed}/>
    } */}
    </div>
    <div>
    <Avatar style={{marginRight:20}} size={32} icon={<UserOutlined />} />
    <span >admin</span>
    </div>
  </Header>
  )
}
