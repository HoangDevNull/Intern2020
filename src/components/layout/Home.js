import React, { useEffect, useState } from 'react'

import TagList from '../home/TagList';
import ArticleList from '../home/ArticleList';
import HeaderContent from '../HeaderContent';

import { Row, Col, Tabs, Layout } from 'antd';

// services
import axios from 'axios';
import { tagUrl, articleUrl } from "../../constant/api";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function Home() {
    const [tags, setTags] = useState([]);
    const [articles, setArticles] = useState({
        articles: [],
        articlesCount: 0
    });
    const [page, setPage] = useState(0);
    useEffect(() => {
        async function getPost() {
            try {
                const { data } = await axios.get(articleUrl(10, 0, ""));
                setArticles({
                    articles: data.articles,
                    articlesCount: data.articlesCount
                });
                console.log("fetch", data)
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
    }, [])

    const onPageChange = async (page) => {
        setPage(page);
        try {
            const { data } = await axios.get(articleUrl(10, page, ""));
            setArticles({
                articles: data.articles,
                articlesCount: data.articlesCount
            });

            console.log("fetch", data)
        } catch (err) {
            console.log(err);
        }
    };
    const renderPost = (tag) => {
        //reset page
        setPage(0);
        // create new tab

        // set data to tab
    }

    const callback = (key) => {
        console.log(key);
    }

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
                    style={{ maxWidth: "1170px", margin: "auto" }}
                >
                    <Col
                        className="gutter-row"
                        xs={24}
                        sm={24}
                        md={18}
                        lg={18}
                        xl={18}
                    >
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Global feed" key="1">
                                {articles.articlesCount > 0 ?
                                    <ArticleList articles={articles} page={page} onPageChange={onPageChange} />
                                    : "No Article found !!!"}
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col
                        className="gutter-row"
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <TagList tags={tags} renderPost={renderPost} />
                    </Col>
                </Row>
            </Content>
        </>

    )
}

export default Home;
