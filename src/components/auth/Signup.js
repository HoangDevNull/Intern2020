import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};
function Signup() {

    // ant form validate
    const [form] = Form.useForm();

    const onFinish = (value) => {
        console.log(value);
    }

    return (
        <>
            <div className="center-f-c">
                <span className="font-xl">Sign up </span>
                <Link to="/signin" className="font-sm">Have a acount ?</Link>
                <br />
            </div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} size="large">
                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item className="center-f">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign in
                        </Button>
                </Form.Item>
            </Form>
        </>


    )
}

export default Signup;