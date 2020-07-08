import React, { useEffect, memo } from "react";
import { List, Row, Col, Divider } from "antd";
import CommentDetail from "./CommentDetail";

import { useSelector, useDispatch } from "react-redux";
import { comment as commentAction } from "actions";

function ComentList({ slug }) {
  const data = useSelector((state) => state.comment.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (slug) {
      dispatch(commentAction.loadComment(slug));
    }
  }, [dispatch, slug]);
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
                author={item.author}
                content={item.content}
                dateUpdate={item.dateUpdate}
              />
            </li>
          )}
        />
      </Col>
    </Row>
  );
}

export default memo(ComentList);
