import styles from "./Contact.module.css";

const Contact = () => (
  <section className={styles.contact}>
    <div>
      <h2>Any questions?</h2>
      <p>
        Send us a message and our amazing tem of people will get back to you as
        soon as they can.
      </p>
      <form>
        <div className={styles.fieldRow}>
          <input type="text" maxlength="256" placeholder="Name" />
          <input type="email" maxlength="256" placeholder="Email" />
        </div>
        <textarea
          placeholder="Write message here...."
          maxlength="5000"
        ></textarea>
        <input type="submit" value="Send message" />
      </form>
    </div>
  </section>
);
export default Contact;
