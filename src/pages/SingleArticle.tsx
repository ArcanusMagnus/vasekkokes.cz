import { useParams } from "react-router-dom";

import Left from "../components/Article/Left";
import Right from "../components/Article/Right";
import Section from "../components/UI/Section";
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
    // console.log(articleProcessedData);

    return (
      <Section>
        <Left
          color={articleProcessedData.color}
          title={articleProcessedData.label}
          description={articleProcessedData.description!}
        />
        <Right content={articleProcessedData.content} />
      </Section>
    );
  }
  return <>Fucking error</>;
};

export default SingleArticle;
