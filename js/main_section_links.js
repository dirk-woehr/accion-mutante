import { links } from "../data/link_data.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";
    const linkGrid = document.createElement("div");
    linkGrid.setAttribute("id", "linkGrid");
    this.appendChild(linkGrid); 
    const linkLists = Object.keys(links);

    linkLists.forEach(linkListKey => {
      const sectionLinks = links[linkListKey];
      const linkListContainer = document.createElement("div");
      linkListContainer.classList.add(linkListKey);

      const linkSectionTitle = document.createElement("h2");
      linkSectionTitle.textContent = linkListKey;
      linkListContainer.appendChild(linkSectionTitle);

      const linkList = document.createElement("ul");
      sectionLinks.forEach(link  => {
        const listItem = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.setAttribute("href", link.url);
        if(link.image) {
          const imageElement = document.createElement("img");
          imageElement.setAttribute("src", link.image);
          imageElement.setAttribute("alt", link.name);
          aElement.appendChild(imageElement);
        } else {
          aElement.textContent = link.name;
        }
        listItem.appendChild(aElement);
        linkList.appendChild(listItem);        
      });
      linkListContainer.appendChild(linkList);
      linkGrid.appendChild(linkListContainer);
    })
  }
}
customElements.define('main-section', MainSection);