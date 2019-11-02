import React, { Component } from "react";
import TopNav from "./nav/top_nav";
import { Asaide } from "./nav/";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <aside className="app-aside app-aside-light app-aside-expand-md">
          <Asaide />
        </aside>
      </React.Fragment>
    );
  }
}

export default Header;
