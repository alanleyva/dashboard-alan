import React from "react";
import { Link } from "react-router-dom";

export const PageTitle = props => (
  <header class="page-title-bar">
    <nav aria-label="breadcrumb" className={props.parent ? "" : "d-none"}>
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <Link to={props.link}>
            <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>
            {props.parent}
          </Link>
        </li>
      </ol>
    </nav>
    <h1 class="page-title"> {props.title} </h1>
    <p class="text-muted"> {props.description} </p>
  </header>
);
