import React from "react";
import { ProjectDisplay } from "./ProjectDisplay";
import "../../styles/projectmapping.css";

export const ProjectMapping = ({ projects }) => {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <ProjectDisplay {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
