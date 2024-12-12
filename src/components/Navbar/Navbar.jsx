import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/nomad/" className={styles.title}>
        Nomad
      </NavLink>
      <div className={styles.burger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? `${styles.show}` : ""}>
        <li>
          <NavLink
            to="/nomad/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nomad/dishes"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dishes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nomad/cooking"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cooking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nomad/ingredients"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Ingredients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nomad/blog"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nomad/significance"
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
