import React from "react";
import { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/Layout.css";
import LogoReact from "../assets/static/react-icon.png";
import { Table, Tag, Space } from "antd";

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

const { Column, ColumnGroup } = Table;

const LayoutC = () => {
  const data = [
    {
      key: "1",
      account: "GATO TRII",
      disponible: 8921216,
    },
    {
      key: "1",
      account: "GATO VALORES",
      disponible: 19237000,
    },
    {
      key: "1",
      account: "GATO AHORROS",
      disponible: 0,
    },
    {
      key: "2",
      account: "GATO INTERNACIONAL",
      disponible: 0,
    },
    {
      key: "3",
      account: "SANTI TRII",
      disponible: 10351290,
    },
    {
      key: "3",
      account: "SANTI VALORES",
      disponible: 0,
    },
    {
      key: "3",
      account: "SANTI AHORROS",
      disponible: 4362121,
    },
    {
      key: "3",
      account: "SANTI VALORES",
      disponible: 11226879,
    },
  ];
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
            <h1>CAPITAL POR UBICACIÓN</h1>
            <Table dataSource={data}>
              <Column title="Account" dataIndex="account" key="account" />
              <Column
                title="Disponible"
                dataIndex="disponible"
                key="disponible"
              />
            </Table>
          </div>
        </Content>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>PÉRDIDAS / GANANCIAS</h1>
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
