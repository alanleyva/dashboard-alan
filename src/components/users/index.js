import React from "react";
import { UserCard } from "./lists";
import { PageTitle } from "../page/page_title";

export const Users = () => (
  <div className="page-inner">
    <PageTitle
      title="Users"
      description="All your current users"
      parent="Dashboard"
      button_txt="New user"
      link="/"
    />
    <div className="row">
      <UserCard
        name="Rosamond Mueller"
        title="Accountant"
        image="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
      />
      <UserCard
        name="Shemar Sanford"
        title="Financial advisor"
        image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?h=350&auto=compress&cs=tinysrgb"
      />
      <UserCard
        name="Sigmund Legros"
        title="Receptionist"
        image="https://randomuser.me/api/portraits/men/61.jpg"
      />
      <UserCard
        name="Alexane Collins"
        title="Social worker"
        image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
      />
      <UserCard
        name="Anna Yost"
        title="Veterinarian"
        image="https://randomuser.me/api/portraits/women/63.jpg"
      />
    </div>
  </div>
);
