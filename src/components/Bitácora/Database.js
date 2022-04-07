import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
const originData = [
  {
    key: "1",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "2",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "3",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "4",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "5",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },

  {
    key: "6",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "7",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "8",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "9",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
  {
    key: "10",
    especie: "Liquidez",
    movimiento: "transferencia",
    origen: "e-saver",
    llegada: "gato-trii",
    cantidad: 1,
    precio: 8921216,
    comision: 0,
    total: 8921216,
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          especie={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      especie: "",
      movimiento: "",
      origen: "",
      llegada: "",
      cantidad: 0,
      precio: 0,
      comision: 0,
      total: 0,
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Especie",
      dataIndex: "especie",
      width: "10%",
      editable: true,
    },
    {
      title: "Movimiento",
      dataIndex: "movimiento",
      width: "10%",
      editable: true,
    },
    {
      title: "Origen",
      dataIndex: "origen",
      width: "10%",
      editable: true,
    },
    {
      title: "Llegada",
      dataIndex: "llegada",
      width: "10%",
      editable: true,
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      width: "10%",
      editable: true,
    },
    {
      title: "Precio",
      dataIndex: "precio",
      width: "10%",
      editable: true,
    },
    {
      title: "Comision",
      dataIndex: "comision",
      width: "10%",
      editable: true,
    },
    {
      title: "Total",
      dataIndex: "total",
      width: "10%",
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "movimiento" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

const Database = () => {
  return (
    <div>
      <EditableTable />
    </div>
  );
};

export default Database;
