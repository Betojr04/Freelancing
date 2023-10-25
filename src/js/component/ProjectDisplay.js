import React from "react";

export const ProjectDisplay = ({
  title,
  description,
  technologies,
  link,
  image,
}) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3 style={{ color: "#ff5a5f" }}>{title}</h3>
      <p>{description}</p>
      <p>Technologies Used: {technologies}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};
