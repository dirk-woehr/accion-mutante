import { gigs } from "../data/gig_data.js";

const sortGigsDesc = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
};
const sortGigsAsc = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
};

export const renderGigs = (parent) => {
  const body = document.querySelector("body");
  const showAll = body.id === "gigs";
  const currentDate = new Date();
  const baseSelection = gigs.filter((gig) => {
    const gigDate = new Date(gig.date);
    return gigDate >= currentDate;
  });

  baseSelection.sort(sortGigsAsc);
  const selections = [baseSelection];

  if (showAll) {
    const extendedSelection = gigs.filter((gig) => {
      const gigDate = new Date(gig.date);
      return gigDate < currentDate;
    });
    extendedSelection.sort(sortGigsDesc);
    selections.push(extendedSelection);
  }

  selections.forEach((selection, index) => {
    const gigsSection = document.createElement("section");
    if (selection.length !== 0) {
      if (index === 0) {
        const upcomingGigsHeader = document.createElement("h1");
        upcomingGigsHeader.textContent = "Upcoming Gigs";
        gigsSection.appendChild(upcomingGigsHeader);
      } else {
        const pastGigsHeader = document.createElement("h1");
        pastGigsHeader.textContent = "Past Gigs";
        gigsSection.appendChild(pastGigsHeader);
      }
    }
    selection.forEach((gig) => {
      const bandList = [];
      gig.bands.forEach((band) => {
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
            ${bandList.map((band) => `<li>${band}</li>`).join("")}
          </ul>
        </div>
        <p class="gigDescription">${gig.description}</p>`;
      gigsSection.appendChild(currentGig);
    });

    parent.appendChild(gigsSection);
  });
};
