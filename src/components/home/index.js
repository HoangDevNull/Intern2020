import React from "react";
import PopularTag from "./PopularTag";
import HeaderContent from "components/HeaderContent";
import { Row, Col, Layout } from "antd";
import TabView from "./TabView";

const { Header, Content } = Layout;
function Home() {
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
            <TabView />
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
            <PopularTag />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Home;
