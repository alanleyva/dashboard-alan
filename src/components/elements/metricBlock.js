import React from "react";
import CountUp from "react-countup";
export const MetricBlock = props => (
  <a
    href="user-teams.html"
    className={`metric align-items-center ` + props.classes}
  >
    <h2 className="metric-label"> {props.title} </h2>
    <p className="metric-value h3">
      <i className={`${props.icon} text-muted mr-2`}></i>
      <span className="value">
        <CountUp end={props.value} />
      </span>
    </p>
  </a>
);
