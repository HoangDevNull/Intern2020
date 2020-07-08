import React from "react";
import { Comment, Avatar, Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

import moment from "moment";
function CommentDetail({ author, content, dateUpdate }) {
  return (
    <Comment
      actions={[
        <span key="comment-basic-like">
          <Button
            size="small"
            className="comment-action"
            icon={<DeleteOutlined />}>
            Delete
          </Button>
        </span>,
      ]}
      author={<a href="/">{author.username}</a>}
      avatar={<Avatar src={author.image} alt={author} />}
      content={<p>{content}</p>}
      datetime={<span>{moment(dateUpdate).format("LLL")}</span>}
    />
  );
}

export default CommentDetail;
