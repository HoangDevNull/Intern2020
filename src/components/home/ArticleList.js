import React, { useMemo, memo } from "react";

import { List, Avatar, Space, Badge, Pagination, Tag } from "antd";
import { HeartFilled } from "@ant-design/icons";
import moment from "moment";

import { Link } from "react-router-dom";

function ArticleList({ data, onPageChange, page, tag }) {
  const style = useMemo(() => {
    return { backgroundColor: "var(--main-bg-color)" };
  }, []);

  if (!data.articles) {
    return <h1> No article exist !!!</h1>;
  }
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.articles}
        renderItem={(item) => (
          <List.Item
            key={item.createdAt}
            actions={[
              <Space>
                <Link to={`/article/${item.slug}`} className="font-sm no-break">
                  Read more ...
                </Link>
              </Space>,
              <div className="tag-wrapper">
                {item.tagList.length > 0
                  ? item.tagList.map((tag) => {
                      return (
                        <Tag key={tag}>
                          <div className="btn-tag">{tag}</div>
                        </Tag>
                      );
                    })
                  : ""}
              </div>,
            ]}
            extra={
              <Badge style={style} count={item.favoritesCount}>
                <div className="heart-emotion">
                  <HeartFilled />
                </div>
              </Badge>
            }>
            <List.Item.Meta
              avatar={<Avatar src={item.author.image} />}
              title={
                <a className="font-md" href="https://ant.design">
                  {item.author.username}
                </a>
              }
              description={moment(item.createdAt).format("LLL")}
            />
            <div className="title-font">{item.title}</div>
            <div className="md-font">{item.description}</div>
          </List.Item>
        )}
      />

      <div className="paginate-wrapper">
        <Pagination
          current={page}
          showSizeChanger={false}
          showTotal={(total) => `Total ${total} items`}
          onChange={(page) => {
            onPageChange(page, tag);
          }}
          total={data.articlesCount}
        />
      </div>
    </>
  );
}

export default memo(ArticleList, (preProps, curProps) => {
  if (preProps.data !== curProps.data) {
    return false;
  }
  return true;
});
