import React from 'react';
import "./app.scss";
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

import { Layout, Row } from 'antd';
import HeaderContent from './components/HeaderContent';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Navbar />

      <Layout>
        <Header className="center-f-c">
          <HeaderContent />
        </Header>
        <Content>
          <Home />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}
export default App;
