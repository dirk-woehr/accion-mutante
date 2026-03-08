document.addEventListener("DOMContentLoaded", async function () {
  /*   await Promise.all([
    customElements.whenDefined('page-content'),
  ]); */

  const body = document.getElementsByTagName("body")[0];
  const bodyId = body.id;

  const scrollToMenu = document.getElementById("scrollToMenu");

  const currentPageLink = body.querySelector(".pageLink." + bodyId);
  currentPageLink.setAttribute("href", "#");
  currentPageLink.classList.add("disabled");

  const btnMenuToggle = document.getElementById("btnMenuToggle");
  const menuList = document.getElementById("menuList");
  btnMenuToggle.addEventListener("click", () => {
    menuList.classList.toggle("show");
    btnMenuToggle.classList.toggle("show");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollToMenu.classList.toggle("show", false);
      } else {
        scrollToMenu.classList.toggle("show", true);
      }
    });
  });

  observer.observe(document.querySelector("#menuList"));
});

/**
 * Render a standard text element
 *
 * @param { string } text - Text content for the element
 * @param { string } elementType - Tag name
 * @param { HTMLElement } parent - Parent element to append new element
 * @param { string[]= } classList - Array of CSS classes
 */
export const renderText = (text, elementType, parent, classList) => {
  const textElement = document.createElement(elementType);
  if(classList) {
    textElement.classList.add(...classList);
  }
  textElement.innerHTML = text;
  parent.appendChild(textElement);
};

/**
 * Render an <a> element
 *
 * @param { string } title - Text content for the element
 * @param { string } url - target for link
 * @param { HTMLElement } parent - Parent element to append new element
 * @param { string[]= } classList - Array of CSS classes
 */
export const renderLink = (title, url, parent, classList) => {
  const aElement = document.createElement("a");
  if(classList) {
    aElement.classList.add(...classList);
  }
  aElement.innerHTML = title;
  aElement.setAttribute("href", url);
  parent.appendChild(aElement);
};

/**
 * Render a YouTube iframe
 *
 * @param { string } url - target for link
 * @param { HTMLElement } parent - Parent element to append new element
 * @param { string[]= } classList - Array of CSS classes
 */
export const renderYouTube = (url, parent) => {
  if (url === undefined) return;
  parent.innerHTML += url;
};

/**
 * Render a YouTube iframe
 *
 * @param { string } listElements - target for link
 * @param { HTMLElement } parent - Parent element to append new element
 * @param { string[]= } classList - Array of CSS classes
 */
export const renderList = (listElements, listType, parent, classList) => {
  const ulElement = document.createElement(listType);
  if(classList) {
    console.log({classList, listElements, parent, listType});
    ulElement.classList.add(...classList);
  }
  listElements.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.textContent = element;
    ulElement.appendChild(liElement);
  });
  parent.appendChild(ulElement);
};


