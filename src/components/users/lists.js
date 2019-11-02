import React from "react";
import { initial } from "../../middleware/text_functions";
export const List = () => (
  <div className="list-group list-group-bordered">
    <ListItem name="Rosamond Mueller" />
    <ListItem name="Shemar Sanford" />
    <ListItem name="Sigmund Legros" />
    <ListItem name="Alexane Collins" />
    <ListItem name="Anna Yost" />
  </div>
);

var ListItem = props => (
  <a href="#" className="list-group-item list-group-item-action">
    <div className="list-group-item-figure">
      <div className="tile tile-circle bg-primary"> {initial(props.name)} </div>
    </div>
    <div className="list-group-item-body"> {props.name} </div>
  </a>
);

export const UserCard = props => (
  <div className="card card-fluid">
    <div className="card-body text-center">
      <a href="user-profile.html" className="user-avatar user-avatar-xl my-3">
        <img src={props.image} alt="" />
      </a>
      <h3 className="card-title text-truncate">
        <a href="user-profile.html">{props.name}</a>
      </h3>
      <h6 className="card-subtitle text-muted mb-3">{props.title}</h6>
      <p>
        <a href="#" className="btn btn-primary circle">
          View Profile <i className="fa fa-arrow-right ml-2"></i>
        </a>
      </p>
    </div>
  </div>
);
