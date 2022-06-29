import styles from "./SocialIcon.module.css";

const SocialIcon = (props: { link: string; icon: JSX.Element }) => {
  return (
    <div className={styles.icon}>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.icon}
      </a>
    </div>
  );
};

export default SocialIcon;
