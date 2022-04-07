import React, { useState } from "react";
import LogoReact from "../assets/static/react-icon.png";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  StockOutlined,
  DollarOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderD = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="logo">
        <img src={LogoReact} alt="react" />
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Capital distribuido</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/bitacora">Bitácora</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<StockOutlined />}>
          <Link to="/stocks">Stocks</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DollarOutlined />}>
          <Link to="/disponible">Disponible</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Founders">
          <Menu.Item key="5">
            <Link to="/founders/gato">Gato</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/founders/santi">Santi</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Clientes">
          <Menu.Item key="7">
            <Link to="/clientes">Yazmin</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/clientes">Don Guillermo</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/clientes">Don Ticardo</Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/clientes">Maria Alejandra</Link>
          </Menu.Item>
          <Menu.Item key="11">
            <Link to="/clientes">Tía Patricia</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="12" icon={<FileOutlined />}>
          <Link to="/cuentas">Cuentas</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderD;
