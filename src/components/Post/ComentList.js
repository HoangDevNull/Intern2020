import React from "react";
import { List } from "antd";
import CommentDetail from "./CommentDetail";

function ComentList() {
  const data = [
    {
      author: {
        username: "Hoang pham",
        image:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create      their product prototypes beautifully and efficiently.",
      dateUpdate: new Date().now,
    },
  ];

  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <CommentDetail
            author={item.author}
            authorAvatar={item.authorAvatar}
            content={item.content}
            dateUpdate={item.dateUpdate}
          />
        </li>
      )}
    />
  );
}

export default ComentList;
