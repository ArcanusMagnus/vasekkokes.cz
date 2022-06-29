import {
  faFacebookF,
  faBehance,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialsModel } from "../../../models/socials-model";
import SocialIcon from "./SocialIcon";
import styles from "./Socials.module.css";

const Socials = (props: SocialsModel) => {
  return (
    <div className={styles.socials}>
      {props.email && props.email.length > 0 && (
        <SocialIcon link={props.email} icon={<FontAwesomeIcon icon={faAt} />} />
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
          icon={<FontAwesomeIcon icon={faLinkedinIn} />}
        />
      )}
      {props.facebook && props.facebook.length > 0 && (
        <SocialIcon
          link={props.facebook}
          icon={<FontAwesomeIcon icon={faFacebookF} />}
        />
      )}
      {props.instagram && props.instagram.length > 0 && (
        <SocialIcon
          link={props.instagram}
          icon={<FontAwesomeIcon icon={faInstagram} />}
        />
      )}
    </div>
  );
};

export default Socials;
