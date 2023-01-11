import React from "react";
import { Button, Form, Input } from "antd";
import "./index.scss";
import { addCustomersAction } from "../../redux/action/customers.actions";
import { useDispatch } from "react-redux";

const AddCustomers = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    form.resetFields();
    dispatch(addCustomersAction(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="add-customers">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message: "please write company name!",
            },
          ]}
        >
          <Input placeholder="contact name" />
        </Form.Item>

        <Form.Item
          label="Contact Title"
          name="contactTitle"
          rules={[
            {
              required: true,
              message: "please write contact title!",
            },
          ]}
        >
          <Input placeholder="contact title" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "please write addrres!",
            },
          ]}
        >
          <Input placeholder="address(country, city)" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Customer ist
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomers;
