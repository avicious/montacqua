import styles from "./Villa.module.css";
import { areaIcon, bathIcon, peopleIcon, roomIcon } from "../assets";

const Villa = ({ img, title, subtitle, info, people, rooms, area, bath }) => {
  return (
    <div className={styles.villa}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.info}>{info}</p>
        </div>
        <div className={styles.specs}>
          <div>
            <img src={peopleIcon} alt="people" />
            <p>{people} People</p>
          </div>
          <div>
            <img src={roomIcon} alt="room" />
            <p>{rooms} Rooms</p>
          </div>
          <div>
            <img src={areaIcon} alt="area" />
            <p>
              {area} m<sup>2</sup>
            </p>
          </div>
          <div>
            <img src={bathIcon} alt="bath" />
            <p>{bath} Bathrooms</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>Book Our Villa</button>
        </div>
      </div>
    </div>
  );
};
export default Villa;
