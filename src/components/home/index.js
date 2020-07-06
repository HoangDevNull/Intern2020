import React, { useEffect, useState } from "react";

import ArticleList from "./ArticleList";
import PopularTag from "./PopularTag";
import HeaderContent from "components/HeaderContent";
import { Row, Col, Tabs, Layout } from "antd";

// services
import axios from "axios";
import { tagUrl, articleUrl } from "constant/api";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function Home() {
  // saga tags
  const [tags, setTags] = useState([]);
  // saga PANEs
  const [panes, setPanes] = useState({ activeKey: "Global feed", data: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await axios.get(articleUrl(10, 0, ""));
        console.log("article", data);
        const initPanes = {
          activeKey: "Global feed",
          data: [
            {
              tag: "Global feed",
              content: data,
            },
          ],
        };
        setPanes(initPanes);
      } catch (err) {
        console.log(err);
      }
    }
    async function getTag() {
      try {
        const { data } = await axios.get(tagUrl());
        data && setTags(data.tags);
      } catch (err) {
        console.log(err);
      }
    }
    getTag();
    getPost();
  }, []);

  const onPageChange = async (page, tag) => {
    setPage(page);
    try {
      let url = articleUrl(
        10,
        page - 1,
        tag.includes("Global feed") ? "" : tag,
      );
      const { data } = await axios.get(url);
      // Make a shallow copy of the panes
      let panesClone = { ...panes };
      // find index with tag name
      let paneIndex = panesClone.data.findIndex((c) => {
        return c.tag.includes(tag);
      });
      // do a update aka index
      panesClone.data[paneIndex].content = data;
      setPanes(panesClone);
    } catch (err) {
      console.log(err);
    }
  };
  const renderPost = async (tag) => {
    //reset page
    setPage(1);
    // fetch article data with tag name;
    try {
      const { data } = await axios.get(articleUrl(10, 0, tag));
      const newPane = {
        activeKey: tag,
        data: [panes.data[0], { tag, content: data }],
      };
      setPanes(newPane);
    } catch (err) {
      console.log(err);
    }

    // add new pane and also set data to that pane
  };

  const onTabChange = (key) => {
    if (key.includes("Global feed")) {
      // remove pane
      let panesClone = { ...panes };

      panesClone.data = panesClone.data.filter((value) =>
        value.tag.includes("Global feed"),
      );
      panesClone.activeKey = "Global feed";

      setPanes(panesClone);
    }
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
            <Tabs activeKey={panes.activeKey} onChange={onTabChange}>
              {panes.data.length &&
                panes.data.map((ele) => (
                  <TabPane tab={ele.tag} key={ele.tag}>
                    {ele.content.articlesCount > 0 ? (
                      <ArticleList
                        articles={ele.content}
                        page={page}
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
            <PopularTag tags={tags} renderPost={renderPost} />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Home;
