import React from "react";
import { List } from "./lists";
import { PageTitle } from "../page/page_title";

const Users = () => (
  <div className="page-inner">
    <PageTitle
      title="Users"
      description="All your current users"
      parent="Dashboard"
    />
    <List />
  </div>
);

export default Users;
