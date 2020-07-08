import React from "react";

import ComentList from "./ComentList";
import PostContent from "./PostContent";
import ReplyComment from "./ReplyComment";

import { useParams } from "react-router-dom";

function Post() {
  const { slug } = useParams();
  return (
    <>
      <PostContent slug={slug} />
      <ComentList slug={slug} />
      <ReplyComment slug={slug} />
    </>
  );
}

export default Post;