export const gigs = [
  {
    title: "Merry Crustmess 2025",
    image: "../images/crustmess_2025.jpg",
    date: "2025-12-23",
    timeOpen: "19:00",
    timeStart: "20:00",
    location: {
      name: "Schwarzer Keiler",
      url: "https://der-schwarze-keiler.de/",
      city: "Stuttgart",
      country: "Germany"
    },
    description:
      "An energetic evening featuring some of the most exciting upcoming indie bands. Expect atmospheric sounds, driving guitars and a vibrant crowd.",
    bands: [
      { name: "Accion Mutante", url: "#" },
      { name: "Cluster Bomb Unit" },
      { name: "Arsen" },
      { name: "Cop An Attitude" }
    ]
  },
  {
    title: "Summer Indie Night 2026",
    image: "https://picsum.photos/id/117/200/300",
    date: "2026-06-12",
    timeOpen: "18:30",
    timeStart: "19:30",
    location: {
      name: "Kesselhaus",
      url: "https://www.kesselhaus-berlin.de",
      city: "Berlin",
      country: "Germany"
    },
    description:
      "An energetic evening featuring some of the most exciting upcoming indie bands. Expect atmospheric sounds, driving guitars and a vibrant crowd.",
    bands: [
      { name: "The Paper Skies", url: "https://example.com/thepaperskies" },
      { name: "Neon Valley" },
      { name: "Midnight Echo" }
    ]
  },
  {
    title: "Autumn Metal Fest",
    image: "https://picsum.photos/id/117/200/300",
    date: "2026-10-03",
    timeOpen: "17:00",
    timeStart: "18:00",
    location: {
      name: "Live Music Hall",
      url: "https://www.livemusichall.de",
      city: "Cologne",
      country: "Germany"
    },
    description:
      "A powerful night of modern and classic metal. Heavy riffs, intense stage performance and an unforgettable atmosphere.",
    bands: [
      { name: "Iron Pulse" },
      { name: "Steel Horizon" },
      { name: "Crimson Dominion" }
    ]
  },
  {
    title: "Acoustic Winter Sessions",
    image: "https://picsum.photos/id/117/200/300",
    date: "2026-12-18",
    timeOpen: "19:00",
    timeStart: "20:00",
    location: {
      name: "Blue Note Café",
      city: "Hamburg",
      country: "Germany"
    },
    description:
      "An intimate acoustic evening with singer-songwriters performing stripped-down versions of their songs in a cozy atmosphere.",
    bands: [
      { name: "Lena Rivers" },
      { name: "Jonah Miles", url: "https://example.com/jonahmiles" }
    ]
  },
  {
    title: "Spring Alternative Showcase",
    image: "https://picsum.photos/id/117/200/300",
    date: "2026-04-25",
    timeOpen: "18:00",
    timeStart: "19:00",
    location: {
      name: "Werk 2",
      url: "https://www.werk-2.de",
      city: "Leipzig",
      country: "Germany"
    },
    description:
      "A showcase of emerging alternative rock bands. Expect dynamic performances and fresh sounds from the underground scene.",
    bands: [
      { name: "Static Bloom" },
      { name: "Silver Lines" },
      { name: "Echo Harbor" }
    ]
  }
];

export const upcomingGigs = gigs.filter(gig => new Date(gig.date) >= new Date());