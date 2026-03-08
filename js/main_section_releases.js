import { renderNews } from "./render_news.js";
import { renderReleases } from "./render_releases.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderReleases(this);
  }
}
customElements.define('main-section', MainSection);