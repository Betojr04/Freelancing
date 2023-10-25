import React from "react";
import { ProjectMapping } from "../component/ProjectMapping";
import { ProjectData } from "../component/ProjectData";

export const ProjectPage = () => {
  return (
    <div>
      <ProjectMapping projects={ProjectData} />
    </div>
  );
};
