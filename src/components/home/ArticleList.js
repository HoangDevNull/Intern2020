import React from "react";

import { List, Avatar, Space, Badge, Pagination } from "antd";
import { HeartFilled } from "@ant-design/icons";
function ArticleList({ articles, onPageChange, page, tag }) {
  // const listData = [];
  // for (let i = 0; i < 10; i++) {
  //     listData.push({
  //         href: 'https://ant.design',
  //         name: `Hoang ${i}`,
  //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  //         description:
  //             'Thu Jul 02 2020',
  //         content:
  //             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  //     });
  // }

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
            ]}
            extra={
              <Badge
                style={{ backgroundColor: "var(--main-bg-color)" }}
                count={5}
              >
                <div className="heart-emotion">
                  <HeartFilled />
                </div>
              </Badge>
            }
          >
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
