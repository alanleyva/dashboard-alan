import React from "react";

export const Users = () => (
  <React.Fragment>
    <UserCard
      image="https://randomuser.me/api/portraits/women/79.jpg"
      name="Gabriela Carvalho"
      title="Pharmacist"
    />
    <UserCard
      image="https://pbs.twimg.com/profile_images/1099856449918943232/hKv3Fddh.jpg"
      name="Diogo Lima"
      title="Architect"
    />
    <UserCard
      image="https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15"
      name="Isabelle Pereira"
      title="Psychologist"
    />
  </React.Fragment>
);

var UserCard = props => (
  <div className="media align-items-center mb-3">
    <div className="col-auto">
      <a href="user-profile.html" className="user-avatar user-avatar-xl">
        <img src={props.image} alt="" />
      </a>
    </div>

    <div className="col">
      <h3 className="card-title text-truncate">
        <a href="user-profile.html">{props.name}</a>
      </h3>
      <h6 className="card-subtitle text-muted"> {props.title} </h6>
    </div>

    <div className="col-auto">
      <button
        type="button"
        className="btn btn-icon btn-secondary mr-1"
        data-toggle="tooltip"
        title=""
        data-original-title="Private message"
      >
        <i className="far fa-comment-alt"></i>
      </button>
      <div className="dropdown d-inline-block">
        <button className="btn btn-icon btn-secondary" data-toggle="dropdown">
          <i className="fa fa-fw fa-ellipsis-h"></i>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-arrow"></div>
          <button type="button" className="dropdown-item">
            Invite to a team
          </button>{" "}
          <button type="button" className="dropdown-item">
            Copy member ID
          </button>
          <div className="dropdown-divider"></div>
          <button type="button" className="dropdown-item">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
);
