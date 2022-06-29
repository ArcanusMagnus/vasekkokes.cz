import styles from "./SocialIcon.module.css";

const SocialIcon = (props: { link: string; icon: JSX.Element }) => {
  const classes = `${styles.icon}`;
  return (
    <div className={classes}>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.icon}
      </a>
    </div>
  );
};

export default SocialIcon;
