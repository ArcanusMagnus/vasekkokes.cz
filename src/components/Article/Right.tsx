import parse from "html-react-parser";

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
  let parsedContent: (string | JSX.Element | JSX.Element[])[] = [];
  if (props.content) {
    for (const subsection of props.content) {
      for (const subsContent of subsection) {
        if (typeof subsContent === "object") {
          for (const subsElement of subsContent) {
            parsedContent.push(parse(subsElement));
          }
        } else {
          parsedContent.push(parse(subsContent));
        }
      }
    }
  }

  return <div className={classes}>{parsedContent}</div>;
};

export default Right;
