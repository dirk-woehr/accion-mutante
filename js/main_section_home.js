import { renderNews } from "./render_news.js";
import { renderGigs } from "./render_gigs.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderGigs(this);
    
    renderNews(true, "desc", this, true);
  }
}
customElements.define('main-section', MainSection);