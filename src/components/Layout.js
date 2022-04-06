import React from "react";
import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/Layout.css";
import LogoReact from "../assets/static/react-icon.png";
import { Table, Tag, Space } from "antd";
import { Column } from "@ant-design/plots";

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
  const data = [
    {
      type: "Gato trii",
      value: 8921000,
    },
    {
      type: "Gato valores",
      value: 19237000,
    },
    {
      type: "Gato ahorros",
      value: 0,
    },
    {
      type: "Gato internacional",
      value: 0,
    },
    {
      type: "Santi trii",
      value: 13771000,
    },
    {
      type: "Santi valores",
      value: 0,
    },
    {
      type: "Santi ahorros",
      value: 4362121,
    },
    {
      type: "Santi internacional",
      value: 11226879,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      value: {
        alias: "销售额",
      },
    },
  };
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
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>PÉRDIDAS / GANANCIAS</h1>
          </div>
        </Content>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>CAPITAL POR UBICACIÓN</h1>
            <Column {...config} />
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
