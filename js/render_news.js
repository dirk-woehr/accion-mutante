import { renderText, renderLink } from "./global.js";
import { manyArticles } from "../data/news_data.js";

export const renderNews = (pinned, parent) => {
  const currentDate = new Date();
  const baseSelection = manyArticles.filter((article) => {
    const inSelection = article.pinned === pinned;
    const articleLaunched = new Date(article.startDate) <= currentDate;
    const articleExpired = article.endDate
      ? new Date(article.endDate) < currentDate
      : false;

    return inSelection && articleLaunched && !articleExpired;
  });

  baseSelection.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB - dateA;
  });

  const newsSection = document.createElement("section");

  if (baseSelection.length && pinned) {
    const headerNews = document.createElement("h1");
    headerNews.textContent = "News";
    newsSection.appendChild(headerNews);
  }

  baseSelection.forEach((article) => {
    const articleElement = document.createElement("article");
    renderText(article.title, "h1", articleElement, [
      "some",
      "classes",
      "to",
      "add",
    ]);
    article.paragraphs.forEach((paragraph) => {
      const pElement = document.createElement("p");
      paragraph.forEach((element) => {
        switch (element.type) {
          case "span":
            renderText(element.text, element.type, pElement, [
              "some",
              "classes",
              "to",
              "add",
            ]);
            break;
          case "h2":
            renderText(element.text, element.type, pElement, [
              "some",
              "classes",
              "to",
              "add",
            ]);
            break;
          case "link":
            renderLink(element.title, element.url, pElement, [
              "some",
              "classes",
              "to",
              "add",
            ]);
            break;
          default:
            break;
        }
      });
      articleElement.appendChild(pElement);
    });
    newsSection.appendChild(articleElement);
  });

  parent.appendChild(newsSection);
};
