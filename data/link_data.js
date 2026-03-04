const bandLinks = [
  { 
    name: "Belching Beet",
    url: "#",
  },
  { 
    name: "Cluster Bomb Unit",
    url: "#",
  },
  { 
    name: "Nasum",
    url: "#",
  },
  { 
    name: "Murder Disco Experience",
    url: "#",
  }
];

const labelLinks = [
  { 
    name: "Crimes Against Humanity",
    url: "#",
    image: "./images/labels/crimeslogo.gif"
  },
  { 
    name: "Cudgel",
    url: "#",
    image: "./images/labels/cudgel.jpg"
  },
  { 
    name: "Relapse",
    url: "#",
    image: "./images/labels/relapse.gif"
  },
  { 
    name: "Shizuka Kollektiv",
    url: "#",
    image: "./images/labels/sk-logo-klein.jpg"
  }
]

const miscLinks = [
  { 
    name: "Campaign for Musical Destruction",
    url: "#",
    image: "./images/misc/campaign.gif"
  },
  { 
    name: "Crustpunk",
    url: "#",
  },
  { 
    name: "Jugendhaus West / Stuttgart",
    url: "#",
    image: "./images/misc/juha-west.png"
  },
  { 
    name: "Schwarzer Keiler",
    url: "#",
  }
]

export const links = {
  bands: [...bandLinks, ...bandLinks, ...bandLinks, ...bandLinks],
  labels: [ ...labelLinks, ...labelLinks],
  misc: [...miscLinks, ...miscLinks]
};