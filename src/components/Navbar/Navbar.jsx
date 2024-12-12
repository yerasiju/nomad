import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.title}>
        Nomad
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dishes"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dishes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cooking"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cooking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ingredients"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Ingredients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/significance"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Significance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
