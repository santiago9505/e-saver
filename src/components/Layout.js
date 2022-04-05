import React from "react";
import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/Layout.css";
import LogoReact from "../assets/static/react-icon.png";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  StockOutlined,
  DollarOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LayoutC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">
          <img src={LogoReact} alt="react" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Capital distribuido
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Bitácora
          </Menu.Item>
          <Menu.Item key="3" icon={<StockOutlined />}>
            Stocks
          </Menu.Item>
          <Menu.Item key="4" icon={<DollarOutlined />}>
            Disponible
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Founders">
            <Menu.Item key="5">Gato</Menu.Item>
            <Menu.Item key="6">Santi</Menu.Item>
            <Menu.Item key="7">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Clientes">
            <Menu.Item key="8">Yazmin</Menu.Item>
            <Menu.Item key="9">Don Guillermos</Menu.Item>
            <Menu.Item key="10">Don Ricardo</Menu.Item>
            <Menu.Item key="11">Maria Alejandra</Menu.Item>
            <Menu.Item key="12">Tía PAtricia</Menu.Item>
          </SubMenu>
          <Menu.Item key="13" icon={<FileOutlined />}>
            Cuentas
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutC;
