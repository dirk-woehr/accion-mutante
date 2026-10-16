import { gigs } from "../data/gig_data.js";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const singleGig = (gig) => {
  const gigDate = new Date(gig.date);
  const dateStrings = gigDate.toLocaleDateString("en-US", dateOptions).split(", ");
  const dateDayOfWeek = dateStrings[0];
  const dateMonthDay = dateStrings[1];
  const dateYear = dateStrings[2];

  const currentGig = document.createElement("div");
  currentGig.classList.add("gig");
  currentGig.innerHTML = `<h2 class="title">${gig.title}</h2>
    <img src="images/gigs/${gig.image}" alt="${gig.title}" class="image">
    <h3 class="location">${gig.location}</h3>
    <p class="address">
      ${gig.address.map((addr) => '<span class="address-line">' + addr + '</span>').join("")}
    </p>
    <h3 class="date">
      <span class="dayOfWeek">${dateDayOfWeek},</span>
      <span class="monthDayYear">${dateMonthDay}, ${dateYear}</span>
    </h3>
    <div class="time">
      <div>Doors open</div>
      <div>${gig.timeDoorsOpen}</div>
      <div>Start</div>
      <div>${gig.timeStart}</div>
    </div>`;
  if (gig.description) {
    currentGig.innerHTML += `<p class="description">${gig.description}</p>`;
  }
  if (gig.link) {
    currentGig.innerHTML += `<a href="${gig.link}" class="link" target="_blank" rel="noopener noreferrer"></a>`;
  }
  return currentGig;
}

class GigsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1 class="sectionTitle"><span>Upcoming Gigs</span></h1>`;

    gigs.sort((a, b) => new Date(a.date) - new Date(b.date)).filter((gig) => new Date(gig.date) >= new Date()).forEach((gig) => {
      this.appendChild(singleGig(gig));
    });
  }
}
customElements.define("gigs-section", GigsSection);