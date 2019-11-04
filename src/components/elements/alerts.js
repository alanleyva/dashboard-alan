import React from "react";

export const Alert = props => (
  <div class="alert alert-warning has-icon" role="alert">
    <div class="alert-icon">
      <span class={props.icon}></span>
    </div>
    {props.text}
  </div>
);
