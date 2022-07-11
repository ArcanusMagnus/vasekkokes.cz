import parse from 'html-react-parser';

import { ArticleContent } from "../../models/article-model";
import styles from "./Right.module.css";

type ArticleContentProps = {
  content?: ArticleContent;
  horizontal?: boolean;
};

const Right = (props: ArticleContentProps) => {
  const classes = `${styles.right} ${
    props.horizontal ? styles.horizontal : undefined
  }`;

  /*content parsing - do later */ 
  return <div className={classes}>{props.content}</div>;
};

export default Right;
