import React from "react";
import { PageTitle } from "../page/page_title";
import { Alert } from "../elements/alerts";

export const Proyects = () => (
  <div className="page-inner">
    <PageTitle
      title="Proyects"
      description="What is the team doing now"
      parent="Dashboard"
      link="/"
    />
    <Alert
      icon="fas fa-heart-broken"
      text="This section is not ready yet. Come back soon"
    />
  </div>
);
