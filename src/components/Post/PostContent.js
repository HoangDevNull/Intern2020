import React, { useEffect } from "react";
import { Avatar, Row, Col, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { postAction } from "redux/post";

function PostContent({ slug }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.post.data;
  });
  useEffect(() => {
    if (slug) {
      dispatch(postAction.loadPost(slug));
    }
  }, [slug, dispatch]);
  return (
    <>
      <div className="post-bg">
        <div className="container post-profile ">
          <span className="title no-break">{data.title}</span>
          <div className="profile">
            <Avatar size="large" src={data.author.image} />
            <div className="profile-content">
              <span className="name">{data.author.username}</span>
              <span className="date-time">
                {moment(data.dateUpdate).format("LLL")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Row type="flex" justify="start" className="m-v-30">
          <Col span={24} className="break-word">
            {data.content}
          </Col>
          <Col span={24} className="m-v-30">
            {data.tagList.length > 0
              ? data.tagList.map((tag) => (
                  <Tag color="#818A91" key={tag}>
                    <div className="btn-tag">{tag}</div>
                  </Tag>
                ))
              : ""}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PostContent;
