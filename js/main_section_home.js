import { renderNews } from "./render_news.js";
import { renderGigs } from "./render_gigs.js";

class MainSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "";

    renderGigs(this);

    renderNews(false, this);
  }
}
customElements.define("main-section", MainSection);
