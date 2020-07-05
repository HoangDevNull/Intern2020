import React from "react";
import "./app.less";
import "./styles/index.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

const { Footer } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout style={{ background: "var(--second-bg-color)" }}>
          <div style={{ minHeight: "80vh" }}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route exact path="/home/:tag" component={Home} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
          <Footer className="center-f">
            <h2>CHECK ME OUT !!!</h2>
          </Footer>
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
