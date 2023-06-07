import styles from "./Book.module.css";
import { Link } from "react-router-dom";

const Book = () => (
  <section className={styles.book}>
    <div>
      <h2>Enjoy the peace & seclusion of our exclusive spa resort location.</h2>
      <p>
        Indulge in one of our special offers, which range from a supper at our
        Michelin-starred Restaurant Vinkeles to the opportunity to learn about
        the benefits of organizing the perfect romantic weekend.
      </p>
      <Link to="/villa">Book Our Villa</Link>
    </div>
  </section>
);
export default Book;
