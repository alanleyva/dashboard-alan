import React, { Component } from "react";
import { Link } from "react-router-dom";

var menu_items = {
  Dashboard: { link: "/", icon: "fas fa-home" },
  Users: { link: "users", icon: "fas fa-user" },
  Tasks: { link: "tasks", icon: "fas fa-tasks" },
  Contacts: { link: "contacts", icon: "fas fa-users" },
  Proyects: { link: "proyects", icon: "fas fa-project-diagram" }
};

function menuItems() {
  var items = [];
  Object.keys(menu_items).map(item => {
    let itemBlock = (
      <li className="menu-item" key={`m_item_${item}`}>
        <Link to={menu_items[item].link} className="menu-link">
          <span className={`menu-icon ${menu_items[item].icon}`}></span>{" "}
          <span className="menu-text">{item}</span>
        </Link>
      </li>
    );
    items.push(itemBlock);
  });

  return items;
}

export const Asaide = () => (
  <nav class="stacked-menu stacked-menu-has-collapsible">
    <ul className="menu">{menuItems()}</ul>
  </nav>
);
