import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    getItem("菜单一", "sub1", <UserOutlined />, [
      getItem(`${props.inputText.username|| '菜单1-1'}`, "3"),
      getItem(`${props.inputText.username|| '菜单2-2'}`, "4"),
    ]),
    getItem("菜单二", "sub2", <TeamOutlined />, [
      getItem(`${props.inputText.username|| '菜单1-1'}`, "6"),
      getItem(`${props.inputText.username|| '菜单2-2'}`, "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];
  return (
    <Sider
    //   collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" style={{lineHeight:"32px", color:"#fff",backgroundColor:"rgba(255, 255, 255, 0.3)", fontSize:"18px",margin:10,textAlign:"center"}}>React</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}
export default SideMenu;
