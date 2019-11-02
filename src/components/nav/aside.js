import React, { Component } from "react";

var menu_items = {
  Dashboard: { icon: "fas fa-home" },
  Users: { icon: "fas fa-user" },
  Tasks: { icon: "fas fa-tasks" },
  Contacts: { icon: "fas fa-users" },
  Proyects: { icon: "fas fa-project-diagram" }
};

function menuItems() {
  var items = [];
  Object.keys(menu_items).map(item => {
    let itemBlock = (
      <li className="menu-item" key={`m_item_${item}`}>
        <a href="index.html" className="menu-link">
          <span className={`menu-icon ${menu_items[item].icon}`}></span>{" "}
          <span className="menu-text">{item}</span>
        </a>
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
