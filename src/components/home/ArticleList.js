import React from "react";

import { List, Avatar, Space, Badge, Pagination, Tag } from "antd";
import { HeartFilled } from "@ant-design/icons";
function ArticleList({ articles, onPageChange, page, tag }) {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articles.articles}
        renderItem={(item) => (
          <List.Item
            key={item.createdAt}
            actions={[
              <Space>
                <span className="font-sm">Read more ...</span>
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
              <Badge
                style={{ backgroundColor: "var(--main-bg-color)" }}
                count={item.favoritesCount }>
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
              description={item.createdAt}
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
          total={articles.articlesCount}
        />
      </div>
    </>
  );
}

export default ArticleList;
