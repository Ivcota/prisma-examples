import React from "react";
import styles from "../styles/component-styles/Nav.module.css";

const Nav: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles["nav-holder"]}>{children}</div>
    </React.Fragment>
  );
};

export default Nav;
