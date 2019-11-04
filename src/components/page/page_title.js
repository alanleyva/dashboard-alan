import React from "react";
import { Link } from "react-router-dom";

export const PageTitle = props => (
  <header class="page-title-bar">
    <div className="d-flex justify-content-between">
      <div>
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
      </div>

      <div class={props.button_txt ? "" : "d-none" + ` btn-toolbar`}>
        <button type="button" class="btn btn-primary" onClick={props.button}>
          <i class="fas fa-plus mr-2"></i>
          {props.button_txt}
        </button>
      </div>
    </div>
  </header>
);
