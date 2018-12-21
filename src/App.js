import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import Home from "./pages/home";
import Write from "./pages/write";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/write" exact component={Write} />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
