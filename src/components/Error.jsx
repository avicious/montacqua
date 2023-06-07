import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => (
  <section className={styles.error}>
    <div className="container">
      <h2>404</h2>
      <p>
        Sorry, we couldn't find what you were looking for, try going back home.
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  </section>
);
export default Error;
