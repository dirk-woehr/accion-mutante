import { gigs } from "../data/gig_data.js";
import { dateOptions, getLang } from "./consts.js";

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
      const {
        bands,
        title,
        image,
        date,
        location,
        timeOpen,
        timeStart,
        description,
      } = gig;
      const bandList = [];
      bands.forEach((band) => {
        bandList.push(band.name);
      });
      const currentGig = document.createElement("div");
      currentGig.classList.add("gig");
      currentGig.innerHTML = `<h1 class="gigTitle">${title}</h1>
        <div class="gigImage">
          <img src="${image}" alt="${title}">
        </div>
        <div class="gigInfo">
          <h3 class="gigDate">${new Date(date).toLocaleDateString(getLang(), dateOptions)}</h3>
          <div class="gigLocation">
            <h3>${location.name}<br>${location.city} / ${location.country}</h3>
          </div>
          <h3 class="gigTimeOpen">Einlass: ${timeOpen} Uhr</h3>
          <h3 class="gigTimeStart">Beginn: ${timeStart} Uhr</h3>
        </div>
        <div class="gigBands">
          <h2>Bands</h2>
          <ul>
            ${bandList.map((band) => `<li>${band}</li>`).join("")}
          </ul>
        </div>
        <p class="gigDescription">${description}</p>`;
      gigsSection.appendChild(currentGig);
    });

    parent.appendChild(gigsSection);
  });
};
