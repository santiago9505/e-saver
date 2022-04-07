import React from "react";
import Equity from "./Equity";
import Profit from "./Profit";
import { Layout } from "antd";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <h1>PÉRDIDAS / GANANCIAS</h1>
          <Profit />
        </div>
      </Content>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <h1>CAPITAL POR UBICACIÓN</h1>
          <Equity />
        </div>
      </Content>
    </>
  );
};

export default Dashboard;
