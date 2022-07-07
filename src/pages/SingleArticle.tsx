import { useParams } from "react-router-dom";

import Left from "../components/Article/Left";
import data from "../data/data.json";
import { ArticleModel } from "../models/article-model";

const SingleArticle = () => {
  const { aid } = useParams();
  const articleData = data.find(
    (item) => item.label.replace(/\W/g, "_") === aid
  );

  if (articleData) {
    const articleProcessedData: ArticleModel = {
      ...articleData,
      id: articleData!.label.replace(/\W/g, "_"),
    };
    console.log(articleProcessedData);

    return <Left color={articleProcessedData.color} title={articleProcessedData.label} description={articleProcessedData.description!}/>;
  }
  return <>Fucking error</>;
};

export default SingleArticle;
