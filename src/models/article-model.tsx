export interface ArticleModel {
  id: string;
  label: string;
  label_left?: boolean;
  // Description made temporarily optional, don't forget to make it mandatory later
  description?: string;
  color: string;
  horizontal?: boolean;
  gallery?: [string, string?][];
  gallery_at_the_end?: boolean;
  content?: ArticleContent;
  visual?: boolean;
  events?: boolean;
  ideas?: boolean;
  writing?: boolean;
}

// Each section should contain multiple subsections (hence array of tuples, that didn't work), each subsection should have one or multiple paragraphs (hence array of strings) followed optionally by one or multiple images (hence array of strings - image addresses)
export type ArticleContent = ArticleSubsection[];

type ArticleSubsection = ArticleSubsectionContent[];
type ArticleSubsectionContent = string[] | string;