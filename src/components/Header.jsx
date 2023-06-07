import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { close, menu } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <NavLink to="/">MONTACQUA</NavLink>
        </div>
        <ul className={styles.desktop}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/villas">Our Villas</NavLink>
          </li>
          <li>
            <NavLink>About Us</NavLink>
          </li>
        </ul>
        <div className={styles.mobile}>
          <img
            onClick={() => setToggle((prev) => !prev)}
            src={toggle ? close : menu}
            alt="menu"
          />
          <div className={toggle ? styles.block : styles.hidden}>
            <ul className={styles.mobileMenu}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/villas">Our Villas</NavLink>
              </li>
              <li>
                <NavLink>About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
