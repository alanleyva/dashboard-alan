import React from "react";
import { PageTitle } from "../page/page_title";
import { Tasks as TaskList } from "../dash/tasks";

export const Tasks = () => (
  <div className="page-inner">
    <PageTitle
      title="Tasks"
      description="This is what you need to do"
      parent="Dashboard"
      button_txt="New Task"
      link="/"
    />
    <div className="row">
      <div className="col-md-6">
        <div className="card card-fluid">
          <TaskList />
        </div>
      </div>
    </div>
  </div>
);
