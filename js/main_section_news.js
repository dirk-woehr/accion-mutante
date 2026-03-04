import { renderNews } from "./render_news.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderNews(true, "desc", this, true);
    renderNews(false, "desc", this, false);
  }
}
customElements.define('main-section', MainSection);