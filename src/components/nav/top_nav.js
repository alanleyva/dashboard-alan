import React, { Component } from "react";
import { connect } from "react-redux";

class TopNav extends Component {
  render() {
    return (
      <header className="app-header app-header-dark">
        <div className="top-bar">
          <div className="top-bar-brand">
            <a href="/">Dashboard</a>
          </div>

          <div className="top-bar-list">
            <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
              <button
                className="hamburger hamburger-squeeze"
                type="button"
                data-toggle="aside"
                aria-label="Menu"
                aria-controls="navigation"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>

            <div className="top-bar-item top-bar-item-full">
              <div className="top-bar-search">
                <div className="input-group input-group-search">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="fas fa-search  "></span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Search"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
              <div className="dropdown">
                <button
                  className="btn-account d-none d-md-flex"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="user-avatar">
                    <img
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg"
                      alt=""
                    />
                  </span>
                  <span className="account-summary pr-lg-4 d-none d-lg-block">
                    <span className="account-name">Juan Pérez</span>
                  </span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-arrow"></div>
                  <h6 className="dropdown-header d-none d-md-block d-lg-none">
                    John Doe
                  </h6>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-icon fas fa-user"></span> Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <span className="dropdown-icon fas fa-sign-out-alt"></span>{" "}
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth, cart }) {
  return { auth, cart };
}

export default connect(mapStateToProps)(TopNav);
