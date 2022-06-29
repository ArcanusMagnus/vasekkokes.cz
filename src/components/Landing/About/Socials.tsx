import {
  faFacebook,
  faBehance,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialsModel } from "../../../models/socials-model";
import SocialIcon from "./SocialIcon";
import styles from "./Socials.module.css";

const Socials = (props: SocialsModel) => {
  return (
    <div className={styles.socials}>
      {props.facebook && props.facebook.length > 0 && (
        <SocialIcon
          link={props.facebook}
          icon={<FontAwesomeIcon icon={faFacebook} />}
        />
      )}
      {props.instagram && props.instagram.length > 0 && (
        <SocialIcon
          link={props.instagram}
          icon={<FontAwesomeIcon icon={faInstagram} />}
        />
      )}
      {props.behance && props.behance.length > 0 && (
        <SocialIcon
          link={props.behance}
          icon={<FontAwesomeIcon icon={faBehance} />}
        />
      )}
      {props.linkedin && props.linkedin.length > 0 && (
        <SocialIcon
          link={props.linkedin}
          icon={<FontAwesomeIcon icon={faLinkedin} />}
        />
      )}
      {props.email && props.email.length > 0 && (
        <SocialIcon
          link={props.email}
          icon={<FontAwesomeIcon icon={faMailBulk} />}
        />
      )}
    </div>
  );
};

export default Socials;
