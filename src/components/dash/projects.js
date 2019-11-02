import React from "react";
import { initial } from "../../middleware/text_functions";

export const Projects = () => (
  <div className="lits-group list-group-flush">
    <ListItem
      name="Groovestreet Webiste"
      rank={Math.floor(Math.random() * 100)}
    />
    <ListItem name="Plusstrip Webiste" rank={Math.floor(Math.random() * 100)} />
    <ListItem name="Sumace Website" rank={Math.floor(Math.random() * 100)} />
  </div>
);

var ListItem = props => (
  <div className="list-group-item">
    <div className="list-group-item-figure">
      <div className="has-badge">
        <a href="page-project.html" className="tile tile-md bg-pink">
          {initial(props.name)}
        </a>
        <a href="#team" className="user-avatar user-avatar-xs d-none"></a>
      </div>
    </div>

    <div className="list-group-item-body">
      <h5 className="card-title">
        <a href="page-project.html">{props.name}</a>
      </h5>
      <p className="card-subtitle text-muted mb-1">Progress in {props.rank}%</p>
      <div className="progress progress-xs bg-transparent">
        <div
          className={`progress-bar ` + barColor(props.rank)}
          role="progressbar"
          aria-valuenow="3981"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${props.rank}%` }}
        >
          <span className="sr-only">{props.rank}% Complete</span>
        </div>
      </div>
    </div>
  </div>
);

function barColor(range) {
  let color;
  switch (true) {
    case range >= 60:
      color = "bg-success";
      break;
    case range >= 40:
      color = "bg-purple";
      break;
    case range <= 40:
      color = "bg-warning";
      break;
  }
  return color;
}
