import { renderNews } from "./render_news.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderNews(true, this);
    renderNews(false, this);
  }
}
customElements.define('main-section', MainSection);