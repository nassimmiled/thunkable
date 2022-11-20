import React, { useState, useCallback } from "react";
import { Modal } from "antd";

import ProjectTitleInput from "./ProjectTitleInput";

import defaultProjectIcons from "../../img/default-project-icon.png";
import editIcon from "../../img/edit-icon.svg";
import deleteIcon from "../../img/delete-icon.svg";
import question from "../../img/question.svg";

import { useStore } from "../../App";

const selectors = (state) => ({
  editProject: state.editProject,
  removeProject: state.removeProject,
});

function Project({ data }) {
  const { editProject, removeProject } = useStore(selectors);

  const { createdAt, title, id } = data;

  const [projectTitle, setProjectTitle] = useState(title || "");
  const [isEditable, setIsEditable] = useState(!title);
  const [isVisibleRemoveModal, setIsVisibleRemoveModal] = useState(false);
  const isNewProject = !createdAt || !title;

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    editProject({
      projectId: id,
      projectTitle,
    });
    setIsEditable(false);
  };

  const handleChange = useCallback((event) => {
    setProjectTitle(event.target.value);
  }, []);

  const handleSubmitRemoveProject = () => {
    removeProject({ projectId: id });
    setIsVisibleRemoveModal(false);
  };

  const handleRemoveProject = () => {
    setIsVisibleRemoveModal(true);
  };

  const handleEnableEditTitle = useCallback(() => {
    setIsEditable(true);
  }, []);

  const hideRemoveModal = () => setIsVisibleRemoveModal(false);

  return (
    <>
      <form className="project" onSubmit={handleSubmitEdit}>
        <div className="title-details">
          <img
            src={defaultProjectIcons}
            alt="Default Project Icon"
            width="32"
            height="32"
          />

          <ProjectTitleInput
            handleChange={handleChange}
            isNewProject={isNewProject}
            title={projectTitle}
            isEditable={isEditable}
          />

          {!isNewProject && (
            <img
              src={editIcon}
              alt="Edit Icon"
              className="action-icon edit-icon"
              onClick={handleEnableEditTitle}
            />
          )}
        </div>

        {!isNewProject && (
          <div className="project-details">
            <p>{createdAt}</p>
            <img
              src={deleteIcon}
              alt="Delete Icon"
              className="action-icon delete-icon"
              onClick={handleRemoveProject}
            />
          </div>
        )}
      </form>

      <Modal
        open={isVisibleRemoveModal}
        onOk={handleSubmitRemoveProject}
        onCancel={hideRemoveModal}
        closable={false}
        okText="Yes"
        cancelText="No"
      >
        <div className="remove-project-modal">
          <img src={question} alt="Question" width="22" height="22" />
          <div>
            <p>Are you sure you want to delete this project?</p>
            <p>This action can't be undone.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Project;
