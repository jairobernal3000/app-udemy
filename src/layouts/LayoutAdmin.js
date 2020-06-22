import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";

import "./LayoutAdmin.scss";
import routes from "../config/routes";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  const user = null;

  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="Layout-admin">
        <Header className="Layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content
          className="Layout-admin__content"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <LoadRoutes routes={routes} />
        </Content>
        <Footer
          className="Layout-admin__footer"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          Jairo Bernal
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
