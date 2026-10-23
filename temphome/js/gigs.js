import { gigs } from "../data/gig_data.js";
// import gigs from '../data/gig_data.json' with { type: 'json' };

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const today = new Date();
const toDayAtMidnight = today.setHours(0, 0, 0, 0);

// Funktion, um ein einzelnes Gig-Element zu erstellen
export const singleGig = (gig, isUpcoming) => {
  const gigDate = new Date(gig.date);
  const dateStrings = gigDate.toLocaleDateString("en-US", dateOptions).split(", ");
  const dateDayOfWeek = dateStrings[0];
  const dateMonthDay = dateStrings[1];
  const dateYear = dateStrings[2];

  const currentGig = document.createElement("div");

  currentGig.classList.add("gig");
  if(!isUpcoming) currentGig.classList.add("past");

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
  if (gig.link && isUpcoming) {
    currentGig.innerHTML += `<a href="${gig.link}" class="link" target="_blank" rel="noopener noreferrer"></a>`;
  }
  return currentGig;
}

// Funktion, um Header für die Gigs-Sektion hinzuzufügen
export const addGigHeader = (element, title) => {
  const header = document.createElement("h1");
  header.classList.add("sectionTitle");
  header.innerText = title;
  element.appendChild(header);
};

class GigsSection extends HTMLElement {
  connectedCallback() {

    const upcomingGigs = gigs.sort((a, b) => new Date(a.date) - new Date(b.date)).filter((gig) => new Date(gig.date) >= toDayAtMidnight);

    if(upcomingGigs.length > 0) {
      addGigHeader(this, "Upcoming Gigs");
    }

    // Gigs nach Datum sortieren & nur zukünftige und heutige Gigs anzeigen
    upcomingGigs.forEach((gig) => {
      this.appendChild(singleGig(gig, true));
    });

    const pastGigs = gigs.sort((a, b) => new Date(b.date) - new Date(a.date)).filter((gig) => new Date(gig.date) < toDayAtMidnight);
    
    if(pastGigs.length > 0) {
      addGigHeader(this, "Past Gigs");
    }

    // Vergangene Gigs nach Datum sortieren und nur vergangene Gigs anzeigen
    pastGigs.forEach((gig) => {
      this.appendChild(singleGig(gig, false));
    });
  }
}

customElements.define("gigs-section", GigsSection);