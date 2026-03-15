import { renderText, renderLink, renderYouTube } from "./global.js";
import { dateOptions, getLang } from "./consts.js";
import { manyArticles } from "../data/news_data.js";

const sort = (a, b) => {
  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);
  return dateB - dateA;
};

export const renderNews = (showAll, parent) => {
  let pinned = true;
  const currentDate = new Date();

  const filterPinnedNews = (article) => {
    const inSelection = article.pinned === pinned;
    if (!inSelection) return false;

    const articleLaunched = new Date(article.startDate) <= currentDate;
    if (!articleLaunched) return false;
    const articleExpired = new Date(article.endDate) <= currentDate;

    return !articleExpired;
  };

  const baseSelection = manyArticles.filter(filterPinnedNews);
  baseSelection.sort(sort);

  const allNews = [...baseSelection];

  if (showAll) {
    pinned = false;
    const extendedSelection = manyArticles.filter(filterPinnedNews);
    extendedSelection.sort(sort);
    allNews.push(...extendedSelection);
  }

  const newsSection = document.createElement("section");

  const headerNews = document.createElement("h1");
  headerNews.textContent = "News";
  newsSection.appendChild(headerNews);

  allNews.forEach((article) => {
    const { title, paragraphs, youtube, startDate } = article;
    // create news article
    const articleElement = document.createElement("article");
    // Render title
    renderText(title, "h1", articleElement, ["some", "classes", "to", "add"]);
    renderText(
      new Date(startDate).toLocaleDateString(getLang(), dateOptions),
      "p",
      articleElement,
      ["date"],
    );

    renderYouTube(youtube, articleElement);

    paragraphs.forEach((p) => {
      let paragraphContainer;
      const pElement = document.createElement("p");
      if (p.image) {
        paragraphContainer = document.createElement("div");
        paragraphContainer.classList.add("imageParagraph");
        const image = document.createElement("div");
        image.setAttribute("style", `background-image: url('${p.image}');`);
        paragraphContainer.appendChild(image);
        paragraphContainer.appendChild(pElement);
      } else {
        paragraphContainer = pElement;
      }
      p.elements.forEach((element) => {
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
      articleElement.appendChild(paragraphContainer);
    });
    newsSection.appendChild(articleElement);
  });

  parent.appendChild(newsSection);
};
