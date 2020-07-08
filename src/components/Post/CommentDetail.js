import React, { useCallback } from "react";
import { Comment, Avatar, Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

import moment from "moment";
function CommentDetail({
  author,
  commentId,
  content,
  dateUpdate,
  canDelete,
  dropComment,
}) {
  const removeComment = useCallback(() => {
    return dropComment(commentId);
  }, [dropComment, commentId]);

  return (
    <Comment
      actions={[
        canDelete && (
          <span key="comment-basic-like">
            <Button
              onClick={removeComment}
              size="small"
              className="comment-action"
              icon={<DeleteOutlined />}>
              Delete
            </Button>
          </span>
        ),
      ]}
      author={<a href="/">{author.username}</a>}
      avatar={<Avatar src={author.image} alt={author} />}
      content={<p>{content}</p>}
      datetime={<span>{moment(dateUpdate).format("LLL")}</span>}
    />
  );
}

export default React.memo(CommentDetail);
