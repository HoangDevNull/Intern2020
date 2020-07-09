import React from "react";
import { Form, Input, Button, Alert, Result } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { registerAction } from "redux/register";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

// Format error message from api to view
const addMsg = (errors) => {
  let msg = "";
  msg = errors?.email ? (msg += `\n email ${errors.email[0]}`) : msg;
  msg = errors?.username ? (msg += `\n username ${errors.username[0]}`) : msg;
  msg = errors?.Password ? (msg += `\n username ${errors.password[0]}`) : msg;

  return msg;
};

function Signup() {
  // ant form validate
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const registerSelector = useSelector((state) => state.register);

  const onFinish = (credential) => {
    dispatch(registerAction.loadRegister(credential));
  };

  if (registerSelector.isRegisSuccess) {
    return (
      <Result
        status="success"
        title="Successfully Register Your New Account!"
        subTitle="You can login now."
        extra={[
          <Button type="primary" key="console">
            <Link to="/signin">SIGN IN</Link>
          </Button>,
        ]}
      />
    );
  }
  return (
    <>
      <div className="center-f-c">
        <span className="font-xl">Sign up </span>
        <Link to="/signin" className="font-sm">
          Have a acount ?
        </Link>
        <br />
      </div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        size="large">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, min: 8 }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item className="center-f">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={registerSelector.isLoading}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
      {registerSelector.error ? (
        <div className="error-wrapper">
          <Alert
            message="Register error"
            description={addMsg(registerSelector.error)}
            type="error"
            showIcon
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Signup;
