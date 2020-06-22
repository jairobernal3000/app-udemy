import React, { Component } from "react";
import { Button } from "antd";
//import { SmileOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import JairoLogo from "../../../assets/img/png/POSoftware_peque.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={JairoLogo}
          alt="Jairo Bernal Florez"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type="menu-fold" />
          <MenuUnfoldOutlined
            active={menuCollapsed ? true : false}
            style={{ fontSize: "16px", color: "#08c" }}
          />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Click Off")}>
          <Icon type="poweroff" />
          <PoweroffOutlined style={{ fontSize: "16px", color: "#08c" }} />
        </Button>
      </div>
    </div>
  );
}
