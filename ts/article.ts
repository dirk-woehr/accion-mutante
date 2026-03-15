const articles: Article[] = [];

interface Article {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  pinned: boolean;
  youtube?: string;
  paragraphs: Paragraph[];
}

type Paragraph = {
  image: string;
  elements: (h2 | span | link)[];
};

interface h2 {
  type: "h2";
  text: string;
}

interface link {
  type: "link";
  title: string;
  url: string;
}

interface span {
  type: "span";
  text: string;
}
