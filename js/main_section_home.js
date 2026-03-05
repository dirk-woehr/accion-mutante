import { renderNews } from "./render_news.js";
import { renderGigs } from "./render_gigs.js";

class MainSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "";
/* 
*/
    const homeSection = document.createElement("section");
    homeSection.id = "homeSection";
    homeSection.innerHTML = `<h1>Welcome to Accion Mutante's Official Website</h1>
    <img src="../images/home.jpg" alt="Accion Mutante Band Image">
    <h2>Discover our latest news, upcoming gigs, and exclusive content. Stay connected with us for all the latest updates and behind-the-scenes insights.</h2>
    `;

    this.appendChild(homeSection);

    renderGigs(this);

    renderNews(false, this);
  }
}
customElements.define("main-section", MainSection);
