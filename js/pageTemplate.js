class HeaderSection extends HTMLElement {
  
connectedCallback(){
  this.innerHTML = `<img src="images/logo.png" alt="Band-Logo">`
  }
}
customElements.define('header-section', HeaderSection);

class MenuSection extends HTMLElement {  
  connectedCallback(){
    const pages = [
      { id: 'home', url: "index.html", name: 'Home'},
      { id: 'gigs', url: "gigs.html", name: 'Gigs'},
      { id: 'news', url: "news.html", name: 'News'},
      { id: 'releases', url: "releases.html", name: 'Releases'},
      { id: 'band', url: "band.html", name: 'Band'},
      { id: 'press', url: "press.html", name: 'Press'},
      { id: 'gallery', url: "gallery.html", name: 'Gallery'},
      { id: 'links', url: "links.html", name: 'Links'},
    ];


    const pageStrings = [];

    pages.forEach(page => {
        pageStrings.push(`<li class="menuItem">
          <a class="pageLink ${page.id}" href="${page.url}">${page.name}</a>
        </li>`
      );
    });

    this.innerHTML = `
        <button id="btnMenuToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="menuList">
        ${pageStrings.join("")}
        </ul>
        <a href="#header" id="scrollToMenu">⤒</a>`
  }
}
customElements.define('menu-section', MenuSection);