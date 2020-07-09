import React, { useEffect, useCallback } from "react";
import { Tabs } from "antd";
import ArticleList from "./ArticleList";

import { useSelector, useDispatch } from "react-redux";
import { articleAction } from "redux/article";

const { TabPane } = Tabs;

function TabView() {
  const dispatch = useDispatch();
  const articleSelector = useSelector((state) => state.article);

  useEffect(() => {
    // Fetching default api
    dispatch(articleAction.loadArticle(1, 10, ""));
  }, [dispatch]);

  //UseCallback for Avoids unnecesarry rendering of child components
  //due to the changed callback reference
  const onTabChange = useCallback(
    (tag) => {
      return dispatch(articleAction.removeArticle(tag));
    },
    [dispatch],
  );

  // paginations
  const onPageChange = useCallback(
    (page, tag) => {
      // update page
      dispatch(
        articleAction.loadArticle(
          page,
          10,
          tag.includes("Global feed") ? "" : tag,
        ),
      );
    },
    [dispatch],
  );
  return (
    <Tabs activeKey={articleSelector.panes.activeKey} onChange={onTabChange}>
      {articleSelector.panes.data.length &&
        articleSelector.panes.data.map((ele) => (
          <TabPane tab={ele.tag} key={ele.tag}>
            <ArticleList
              data={ele.content}
              page={articleSelector.page}
              onPageChange={onPageChange}
              tag={ele.tag}
            />
          </TabPane>
        ))}
    </Tabs>
  );
}

export default TabView;
