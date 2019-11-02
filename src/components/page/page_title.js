import React from "react";

export const PageTitle = props => (
  <header class="page-title-bar">
    <nav aria-label="breadcrumb" className={props.parent ? "" : "d-none"}>
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <a href="#">
            <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>
            {props.parent}
          </a>
        </li>
      </ol>
    </nav>
    <h1 class="page-title"> {props.title} </h1>
    <p class="text-muted"> {props.description} </p>
  </header>
);
