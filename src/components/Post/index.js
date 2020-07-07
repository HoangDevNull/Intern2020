import React, { useEffect } from "react";
import { Avatar, Divider, Row, Col, Tag } from "antd";
import ComentList from "./ComentList";
import moment from "moment";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { post as postActon } from "actions";

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const postSelector = useSelector((state) => state.post);
  const { data } = postSelector;
  useEffect(() => {
    console.log("dispatch slug" + slug);
    if (slug) {
      dispatch(postActon.loadpost(slug));
    }
  }, [slug, dispatch]);

  return (
    <>
      <div className="post-bg">
        <div className="container post-profile ">
          <span className="title">{data.title}</span>
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
          <Col span={24}>{data.content}</Col>
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
        <Row justify="center" gutter={[16, { xs: 12, sm: 16, md: 24, lg: 32 }]}>
          <Col span={24}>
            <Divider orientation="center" plain>
              COMMENT
            </Divider>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={18} lg={18} xl={18}>
            <ComentList />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Post;
