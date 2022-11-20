import { formatDate } from "../utils";
import { v4 as uuidv4 } from "uuid";

export const setters = (set, get) => ({
  addProject: () => {
    const projects = get().projects;

    return set({
      projects: [...projects, { id: uuidv4() }],
    });
  },

  editProject: ({ projectId, projectTitle }) => {
    const projects = get().projects.map((project) => {
      if (project?.id === projectId) {
        project.title = projectTitle;

        if (!project?.createdAt) {
          project.createdAt = formatDate(new Date());
        }
      }
      return project;
    });

    return set({
      projects,
    });
  },

  removeProject: ({ projectId }) => {
    const projects = get().projects;

    const filteredProjects = projects.filter(
      (project) => project.id !== projectId
    );

    return set({
      projects: filteredProjects,
    });
  },
});
