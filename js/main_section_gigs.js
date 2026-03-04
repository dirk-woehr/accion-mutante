import { renderGigs } from "./render_gigs.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

    renderGigs(this);
  }
}
customElements.define('main-section', MainSection);