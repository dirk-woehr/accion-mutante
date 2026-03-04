import { gigs } from "../data/gig_data.js";

class MainSection extends HTMLElement {
  
 connectedCallback(){
    this.innerHTML = "";

     gigs.forEach(gig  => {
      const bandList = [];
      gig.bands.forEach(band => {
        bandList.push(band.name);
      });
      const currentGig = document.createElement("div");
      currentGig.classList.add("gig");
      currentGig.innerHTML = `<h1 class="gigTitle">${gig.title}</h1>
        <div class="gigImage">
          <img src="${gig.image}" alt="${gig.title}">
        </div>
        <div class="gigInfo">
          <h3 class="gigDate">${gig.date}</h3>
          <div class="gigLocation">
            <h3>${gig.location.name}<br>${gig.location.city} / ${gig.location.country}</h3>
          </div>
          <h3 class="gigTimeOpen">Einlass: ${gig.timeOpen} Uhr</h3>
          <h3 class="gigTimeStart">Beginn: ${gig.timeStart} Uhr</h3>
        </div>
        <div class="gigBands">
          <h2>Bands</h2>
          <ul>
            ${bandList.map(band => `<li>${band}</li>`).join('')}
          </ul>
        </div>
        <p class="gigDescription">${gig.description}</p>`;
      this.appendChild(currentGig);
    });
  }
}
customElements.define('main-section', MainSection);