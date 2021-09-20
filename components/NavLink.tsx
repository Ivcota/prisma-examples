import React from "react";
import styles from "../styles/component-styles/NaveLink.module.css";
import Link from "next/link";

interface Props {
  text: string;
}

const NavLink: React.FC<Props> = ({ text }) => {
  return (
    <React.Fragment>
      <Link href="/artists">
        <a className={styles.container}>
          <div className={styles.h2}>{text}</div>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default NavLink;
