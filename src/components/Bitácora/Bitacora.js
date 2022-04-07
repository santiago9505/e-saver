import React from "react";
import { Layout } from "antd";
import Database from "./Database";

const { Content } = Layout;

const Bitacora = () => {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <h1>MOVIMIENTOS</h1>
          <Database />
        </div>
      </Content>
    </>
  );
};

export default Bitacora;
