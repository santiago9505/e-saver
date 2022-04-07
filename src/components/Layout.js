import React, { Children } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/Layout.css";
import Sider from "./Sider";

const { Header, Content, Footer } = Layout;

const LayoutC = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider></Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        {children}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutC;
