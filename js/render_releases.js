import { renderText, renderLink, renderYouTube, renderList } from "./global.js";
import { releases } from "../data/release_data.js";
import { labelLinks } from "../data/label_data.js";

export const renderReleases = (parent) => {
  
  const availabilityOrder = [
    "available",
    "outOfPrint",
  ];

  availabilityOrder.forEach(status => {
    const releaseSection = document.createElement("section");
    const headerReleases = document.createElement("h1");
    headerReleases.textContent = status === "available" ? "Current Releases" : "Out of Print";
    releaseSection.appendChild(headerReleases);

    const selectedReleases = releases.filter(release => {
      return release.status === status;
    });

    selectedReleases.sort((a, b) => {
      const dateA = new Date(a.releaseDate);
      const dateB = new Date(b.releaseDate);
      return dateB - dateA;
    });

    selectedReleases.forEach(release => {
      const { title, description, releaseDate, type, formats, image, tracks, shopURL } = release;
      const articleElement = document.createElement("article");
      articleElement.classList.add("release");

      const titleElement = document.createElement("h1");
      titleElement.textContent = title;
      titleElement.classList.add("title");
      articleElement.appendChild(titleElement);

      const infoContainer = document.createElement("div");
      infoContainer.classList.add("infoContainer");


      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", image);
      imageElement.setAttribute("alt", title);
      imageElement.classList.add("image");
      articleElement.appendChild(imageElement);

      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("description");

      renderText(type, "h2", descriptionElement, ["releaseType"]);

      renderText(description, "p", descriptionElement, ["descriptionText"]);

      articleElement.appendChild(descriptionElement);

      if(release.status === "available") {
        if(shopURL) {
          renderLink("Buy Here", shopURL, descriptionElement);
        } else {
          const label = labelLinks.find(label => label.name === release.label);
          if(label) {
            renderLink( `Buy on ${label.name}`, label.url, descriptionElement);
          } else {
            renderText("Not currently available for purchase", "p", descriptionElement);
          }
        }
      } else{
        renderText("Not currently available for purchase", "p", descriptionElement);
      }

      if(formats) {
        renderText("Available Formats", "h4", descriptionElement, ["formatsHeader"]);
        renderList(formats, "ul", descriptionElement, ["formatList"]);
      };

      const trackElements = document.createElement("div");
      trackElements.classList.add("tracks");
      renderText("Tracks", "h4", trackElements, ["trackHeader"]);
      renderList(tracks, "ol", trackElements, ["tracklist"]);

      articleElement.appendChild(imageElement);
      articleElement.appendChild(descriptionElement);
      articleElement.appendChild(trackElements);
      releaseSection.appendChild(articleElement);
    });
    parent.appendChild(releaseSection);
  });






};
