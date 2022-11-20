import React, { memo } from "react";

const ProjectTitleInput = memo(
  ({ isNewProject, title, handleChange, isEditable }) => {
    if (!isEditable) {
      return <p className="title">{title}</p>;
    }

    return (
      <input autoFocus={isNewProject} value={title} onChange={handleChange} />
    );
  }
);

export default ProjectTitleInput;
