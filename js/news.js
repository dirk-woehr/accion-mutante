import { manyArticles } from "../data/news.js";
import { renderText, renderLink } from "./global.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    manyArticles.forEach(article => {
      const articleElement = document.createElement("article");
      renderText(article.title, "h1", articleElement, ["some", "classes", "to", "add"]);
      article.paragraphs.forEach(paragraph => {
        const pElement = document.createElement("p");
        paragraph.forEach(element => {
          console.log({element});
          switch (element.type) {
            case "span":
              renderText(element.content, element.type, pElement, ["some", "classes", "to", "add"]);
              break;
            case "h2":
              renderText(element.content, element.type, pElement, ["some", "classes", "to", "add"]);
              break;
            case "link":
              renderLink(element.title, element.url, pElement, ["some", "classes", "to", "add"]);
              break;                
            default:
              break;
            }
        });
        articleElement.appendChild(pElement);
      });
      this.appendChild(articleElement);
    });
  }
}
customElements.define('main-section', MainSection);