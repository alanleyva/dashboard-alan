import React from "react";

export const Tasks = () => (
  <React.Fragment>
    <div className="card-body">
      <div className="todo-list">
        <div className="todo-header"> Current Tasks </div>
        <ToDo task="Make Dashboard Page" checked={true} id="dash" />
        <ToDo task="Make Users Page" id="users" />
        <ToDo task="Make Tasks Page" id="tasks" />
        <div className="todo-header"> Future Tasks </div>
        <ToDo task="Make Contacts Page" id="contacts" />
        <ToDo task="Make Proyects Page" id="proyects" />
      </div>
    </div>

    <div className="card-footer">
      <a href="#" className="card-footer-item">
        View all <i className="fa fa-fw fa-angle-right"></i>
      </a>
    </div>
  </React.Fragment>
);

var ToDo = props => (
  <div className="todo">
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={props.id}
        checked={props.checked ? true : false}
      />
      {""}
      <label className="custom-control-label" for="todo2">
        {props.task}
      </label>
    </div>
  </div>
);
