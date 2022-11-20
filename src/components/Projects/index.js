import React, { memo } from "react";

import Project from "./Project";

export const Projects = memo(({ projects }) => {
  return (
    <div className="projects">
      {projects?.map((project) => (
        <Project data={project} key={project.id} />
      ))}
    </div>
  );
});
