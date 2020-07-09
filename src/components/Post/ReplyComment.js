import React, { memo } from "react";
import { Row, Col, Divider, Form, Button, Input } from "antd";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { commentAction } from "redux/comment";

const { TextArea } = Input;

function ReplyComment({ slug }) {
  // ant form validate
  const [form] = Form.useForm();
  const isLogin = useSelector((state) => state.login.isLogin);

  const errorsMsg = useSelector((state) => state.comment.error);

  const dispatch = useDispatch();

  const onFinish = ({ comment }) => {
    dispatch(commentAction.loadAddComment(slug, comment));
  };

  if (errorsMsg) {
    return <h1 className="center-f">{errorsMsg}</h1>;
  }

  // if not sign in -> just return JSX, do not fetch comment
  if (!isLogin) {
    return (
      <div className="container">
        <Divider orientation="center"></Divider>
        <Row type="flex" justify="center" className=" m-v-30">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Link to="/signin">Sign in</Link> or{" "}
            <Link to="/signin">Sign up</Link> to add comments on this article.
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={16} xl={16} xxl={10}>
        <Form form={form} name="control-hooks" onFinish={onFinish} size="large">
          <Form.Item
            name="comment"
            rules={[
              {
                required: true,
                message: "Your comment shouldn't empty!",
              },
            ]}>
            <TextArea placeholder="Write a comment ..." rows={4} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default memo(ReplyComment);
