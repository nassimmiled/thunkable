import create from "zustand";
import { persist } from "zustand/middleware";

import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

import { schema } from "./zustand/schema";
import { setters } from "./zustand/setters";

import "./App.scss";
import "antd/dist/antd.min.css";

export const useStore = create(
  persist((...params) => ({
    ...schema,
    ...setters(...params),
  })),
  {
    name: "projects-storage",
    getStorage: () => sessionStorage,
  }
);

const selectors = (state) => ({
  projects: state.projects,
});

function App() {
  const { projects } = useStore(selectors);

  const isEmptyProjects = !projects?.length;

  return (
    <div
      className="app-container"
      style={{ backgroundColor: isEmptyProjects && "white" }}
    >
      <Header />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
