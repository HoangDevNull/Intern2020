import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "actions";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
function Signin() {
  // ant form validate
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.login);

  const onFinish = (value) => {
    dispatch(login.loadLogin(value));
  };

  if (loginSelector.isLogin) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="center-f-c">
        <span className="font-xl">Sign in </span>
        <Link to="/signup" className="font-sm">
          Need a acount?
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
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, min: 8, message: "Please input your password!" },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item className="center-f">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loginSelector.isLoading}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
      {loginSelector.error ? (
        <div className="error-wrapper">
          <Alert
            message="Login error"
            description={loginSelector.error}
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

export default Signin;
