import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <NavLink to="/">MONTACQUA</NavLink>
        </li>
        <li>
          <NavLink to="/villas">OUR VILLAS</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
