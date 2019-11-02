import React from "react";
import { List } from "../users/lists";
import { Tasks } from "./tasks";
import { PageTitle } from "../page/page_title";
import { Projects } from "./projects";
import { Users as Contacts } from "../users/user_cards";

const Dashboard = () => (
  <div className="page-inner">
    <PageTitle title="Dashboard" description="Where do you want to go" />
    <div className="card-deck-xl">
      <div className="card card-fluid pb-0">
        <div className="card-header">Users</div>
        <List />
      </div>
      <div className="card card-fluid pb-0">
        <div className="card-header">Latest Tasks</div>
        <Tasks />
      </div>
    </div>
    <div className="card-deck-xl">
      <div className="card card-fluid pb-3">
        <div className="card-header"> Last Contacts </div>
        <div className="card-body">
          <Contacts />
        </div>
      </div>

      <div className="card card-fluid pb-3">
        <div className="card-header"> Active Projects </div>
        <Projects />
      </div>
    </div>
  </div>
);

export default Dashboard;
