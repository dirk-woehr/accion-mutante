import { links } from "../data/links.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";
    const linkSections = Objeckt.keys(links);

    linkSections.forEach(linkSectionKey => {
      const sectionLinks = links[linkSectionKey];
      const linkSection = document.createElement("section");
      linkSection.classList.add(linkSectionKey);

      sectionLinks.forEach(link  => {
        const aElement = document.createElement("a");
        aElement.setAttribute("href", link.url);
        if(link.image) {
          const imageElement = document.createElement("img");
          imageElement.setAttribute("src", link.image);
          imageElement.setAttribute("alt", link.name);
          aElement.appendChild(imageElement);
        } else {
          aElement.textContent = link.title;
        }
        linkSection.appendChild(aElement);        
      });
      this.appendChild(linkSection);
    })
  }
}
customElements.define('main-section', MainSection);