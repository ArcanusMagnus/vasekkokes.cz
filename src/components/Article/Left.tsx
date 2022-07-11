import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Left.module.css";
import { Link } from "react-router-dom";

const Left = (props: { title: string; description: string; color: string }) => {
  return (
    <div className={styles.left} style={{ backgroundColor: props.color }}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <Link to="/">
        <div className={styles.back}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className={styles["back__icon"]}
          />{" "}
          <p>Back on track</p>
        </div>
      </Link>
    </div>
  );
};

export default Left;
