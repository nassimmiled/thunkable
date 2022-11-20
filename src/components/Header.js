import React, { memo } from "react";
import logo from "../img/thunkable-logo.png";
import AddButton from "./AddButton";

import { useStore } from "../App";

export const Header = memo(() => {
  const { addProject } = useStore((state) => ({
    addProject: state.addProject,
  }));

  const onClickAddProject = () => {
    addProject();
  };

  return (
    <div className="app-header">
      <div>
        <img src={logo} alt="logo" width="32" height="32" />
        <p>MY PROJECTS</p>
      </div>
      <AddButton onClickBtn={onClickAddProject} />
    </div>
  );
});

Header.propTypes = {};

export default Header;
