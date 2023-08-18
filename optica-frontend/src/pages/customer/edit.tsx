import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";

export const CustomerEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Id"
          name={["id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly disabled />
        </Form.Item>
        <Form.Item
          label="Date"
          name={["date"]}
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker style={{ width: "100%" }} format="DD-MM-YYYY" />
        </Form.Item>
        <Form.Item
          label="Fecha prometida"
          name={["targetDate"]}
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker style={{ width: "100%" }} format="DD-MM-YYYY" />
        </Form.Item>
        <Form.Item
          label="Far ODEsf"
          name={["farODEsf"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Far OIEsf"
          name={["farOIEsf"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Close ODEsf"
          name={["closeODEsf"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Close OIEsf"
          name={["closeOIEsf"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
