import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ArticleList from "./ArticleList";
import PopularTag from "./PopularTag";
import HeaderContent from "components/HeaderContent";
import { Row, Col, Tabs, Layout } from "antd";

// services
import { tag as tagAction, article as articleAction } from "actions";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function Home() {
  const tagSelector = useSelector((state) => state.tag);
  const articleSelector = useSelector((state) => state.article);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch fetch TAG actions
    dispatch(tagAction.loadTag());
    dispatch(articleAction.loadArticle(0, 10, ""));
  }, [dispatch]);

  // paginations
  const onPageChange = async (page, tag) => {
    // update page
    dispatch(
      articleAction.loadArticle(
        page,
        10,
        tag.includes("Global feed") ? "" : tag,
      ),
    );
  };

  // change Post when tag changes
  const renderPost = async (tag) => {
    dispatch(articleAction.loadArticle(0, 10, tag));
  };

  const onTabChange = (tag) => {
    dispatch(articleAction.removeArticle(tag));
  };
  return (
    <>
      <Header className="center-f-c">
        <HeaderContent />
      </Header>
      <Content>
        <Row
          type="flex"
          justify="center"
          gutter={[16, { xs: 12, sm: 16, md: 24, lg: 32 }]}
          className="container">
          <Col className="gutter-row" xs={24} sm={24} md={18} lg={18} xl={18}>
            <Tabs
              activeKey={articleSelector.panes.activeKey}
              onChange={onTabChange}>
              {articleSelector.panes.data.length &&
                articleSelector.panes.data.map((ele) => (
                  <TabPane tab={ele.tag} key={ele.tag}>
                    {ele.content.articlesCount > 0 ? (
                      <ArticleList
                        articles={ele.content}
                        page={articleSelector.page}
                        onPageChange={onPageChange}
                        tag={ele.tag}
                      />
                    ) : (
                      "No Article found !!!"
                    )}
                  </TabPane>
                ))}
            </Tabs>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
            <PopularTag tags={tagSelector.tagList} renderPost={renderPost} />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Home;
