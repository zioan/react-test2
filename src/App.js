import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
