import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";

const Equity = () => {
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
        alias: "Tipo de cuenta",
      },
      value: {
        alias: "Capital total",
      },
    },
  };
  return (
    <div>
      <Column {...config} />
    </div>
  );
};

export default Equity;
