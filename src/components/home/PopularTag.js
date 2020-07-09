import React, { useEffect, useMemo } from "react";
import { Card, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { tag as tagAction, article as articleAction } from "actions";

function PopularTag() {
  // style
  const style = useMemo(() => {
    return {
      card: { background: "#F3F3F3" },
      tag: { borderRadius: "10rem" },
    };
  }, []);

  // redux hook
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tagList);

  useEffect(() => {
    dispatch(tagAction.loadTag());
  }, [dispatch]);

  // change Post when tag changes
  const renderPost = async (tag) => {
    dispatch(articleAction.loadArticle(0, 10, tag));
  };

  return (
    <Card title="Popular tag" bordered={false} style={style.card}>
      {tags.length > 0
        ? tags.map((tag) => {
            return (
              <Tag color="#818A91" key={tag} style={style.tag}>
                <div
                  className="btn-tag"
                  onClick={() => {
                    renderPost(tag);
                  }}>
                  {tag}
                </div>
              </Tag>
            );
          })
        : "No popular tag exist !!!"}
    </Card>
  );
}

export default PopularTag;
