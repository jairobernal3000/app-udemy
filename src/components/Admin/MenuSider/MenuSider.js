import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { Sider } = Layout;
  const { menuCollapsed } = props;
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/admin">
            <HomeOutlined style={{ fontSize: "16px", color: "#08c" }} />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item to={"/admin/menu-web"}>
          <MenuOutlined style={{ fontSize: "16px", color: "#08c" }} />
          <span className="nav-text">Menu WEB</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
