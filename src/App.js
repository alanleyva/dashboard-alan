import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import $ from "jquery";
// eslint-disable-next-line
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/font-awesome.css";
import "./css/app.css";
import Header from "./components/header";
// import Footer from "./components/footer";
import Main from "./components/main";
import { Users } from "./components/users/";
import { Tasks } from "./components/tasks/";
import { Proyects } from "./components/proyects/";
import ScrollToTop from "./middleware/scrollTop";
import * as serviceWorker from "./serviceWorker";
import { Contacts } from "./components/contacts";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="app">
          <Header />
          <main className="app-main">
            <Route exact path="/" component={Main} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/proyects" component={Proyects} />
          </main>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
