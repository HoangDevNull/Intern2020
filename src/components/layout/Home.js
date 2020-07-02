import React from 'react'
import { Row, Col, List, Avatar, Space, Tabs, Badge, Tag, Card } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const { TabPane } = Tabs;

function Home() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            name: `Hoang ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Thu Jul 02 2020',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }


    const callback = (key) => {
        console.log(key);
    }
    return (
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
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={listData}

                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <Space>
                                            <span className="font-sm">Read more ...</span>
                                        </Space>
                                    ]}
                                    extra={
                                        <Badge style={{ backgroundColor: 'var(--main-bg-color)' }} count={5}>
                                            <div className="heart-emotion">
                                                <HeartFilled />
                                            </div>
                                        </Badge>
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.name}</a>}
                                        description={item.description}
                                    />
                                    <div className="title-font">This was a title</div>
                                    <div className="md-font">{item.content}</div>
                                </List.Item>
                            )}
                        />
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
                <Card title="Popular tag" bordered={false} >
                    <Tag color="#818A91">
                        <a href="https://github.com/ant-design/ant-design/issues/1862">Sida</a>
                    </Tag>
                    <Tag color="#818A91">
                        <a href="https://github.com/ant-design/ant-design/issues/1862">Hitler</a>
                    </Tag>
                    <Tag color="#818A91">
                        <a href="https://github.com/ant-design/ant-design/issues/1862">Test</a>
                    </Tag>
                </Card>


            </Col>

        </Row>

    )
}

export default Home;
