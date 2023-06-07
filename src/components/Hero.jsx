import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>
          <span className={styles.headingSpan}>visit</span>
          MONTACQUA RESORT
        </h1>
      </div>
    </div>
  );
};
export default Hero;
