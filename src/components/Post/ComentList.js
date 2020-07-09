import React, { useEffect, memo } from "react";
import { List, Row, Col, Divider } from "antd";
import CommentDetail from "./CommentDetail";

import { useSelector, useDispatch } from "react-redux";
import { commentAction } from "redux/comment";

function ComentList({ slug }) {
  const username = useSelector((state) => state.login.username);
  const data = useSelector((state) => state.comment.data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (slug) {
      dispatch(commentAction.loadComment(slug));
    }
  }, [dispatch, slug]);

  const dropComment = (commentId) => {
    if (slug) {
      dispatch(commentAction.loadDropComment(slug, commentId));
    }
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Divider orientation="center" plain>
          COMMENT
        </Divider>
      </Col>
      <Col xs={24} sm={24} md={18} lg={16} xl={16} xxl={10}>
        <List
          className="comment-list"
          header={`${data && data.length} replies`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li>
              <CommentDetail
                commentId={item.id}
                author={item.author}
                content={item.content}
                dateUpdate={item.dateUpdate}
                canDelete={username === item.author.username}
                dropComment={dropComment}
              />
            </li>
          )}
        />
      </Col>
    </Row>
  );
}

export default memo(ComentList);
