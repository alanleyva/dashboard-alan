import React from "react";
import { List } from "../users/lists";
import { Tasks } from "./tasks";
import { PageTitle } from "../page/page_title";
import { Projects } from "./projects";

const Dashboard = () => (
  <div className="page-inner">
    <PageTitle title="Dashboard" description="Where do you want to go" />
    <div class="card-deck-xl">
      <div className="card card-fluid pb-0">
        <div className="card-header">Users</div>
        <List />
      </div>
      <div className="card card-fluid pb-0">
        <div className="card-header">Latest Tasks</div>
        <Tasks />
      </div>
    </div>
    <div class="card-deck-xl">
      <div class="card card-fluid pb-3">
        <div class="card-header"> Active Projects </div>
        <Projects />
      </div>
    </div>
  </div>
);

export default Dashboard;
