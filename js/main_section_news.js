import { renderNews } from "./render_news.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderNews(true, this);
  }
}
customElements.define('main-section', MainSection);