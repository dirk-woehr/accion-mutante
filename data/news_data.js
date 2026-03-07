const articles = [
  {
    id: "3f1f9b8e-6c4a-4a1e-9f6e-2c0c6f9d1b2a",
    startDate: "2026-02-23",
    endDate: "2026-03-18",
    title: "Test Article",
    pinned: false,
    paragraphs: [
      [
        {
          type: "h2",
          text: "This is a Subheader",
        },
        {
          type: "span",
          text: "To go to Google, go ",
        },
        {
          type: "link",
          title: "this way please.",
          url: "https://www.google.com",
        },
        {
          type: "span",
          text: "Otherwise stay here. ",
        },
        {
          type: "span",
          text: "No light but the muted purring of the blowers and the amplified breathing of the fighters. The alarm still oscillated, louder here, the rear wall dulling the roar of the room where Case waited. The semiotics of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. Light from a service hatch at the rear wall dulling the roar of the room where Case waited. Its hands were holograms that altered to match the convolutions of the console in faded pinks and yellows. She peered at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the previous century. Then a mist closed over the black water and the robot gardener. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the tunnel’s ceiling. Light from a service hatch at the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.",
        },
      ],
      [
        {
          type: "h2",
          text: "This is another Subheader",
        },
        {
          type: "span",
          text: "Still it was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. He woke and found her stretched beside him in the human system. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the arcade showed him broken lengths of damp chipboard and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. Case felt the edge of the car’s floor. The semiotics of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Case felt the edge of the previous century. Case felt the edge of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. The two surviving Founders of Zion were old men, old with the movement of the train, their high heels like polished hooves against the gray metal of the previous century. Now go ",
        },
        {
          type: "link",
          title: "this way please.",
          url: "https://www.google.com",
        },
        {
          type: "span",
          text: " She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a skyscraper canyon. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the tunnel’s ceiling. Sexless and inhumanly patient, his primary gratification seemed to he in his capsule in some coffin hotel, his hands clawed into the shadow of the console. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the room where Case waited. He’d waited in the dark, curled in his devotion to esoteric forms of tailor-worship. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the amplified breathing of the bright void beyond the chain link.",
        },
      ],
    ],
  },
];

export const manyArticles = [
  ...articles,
  ...articles,
  ...articles,
  ...articles,
  ...articles,
  { ...articles[0], pinned: true, title: "A Pinned Article" },
  {
    ...articles[0],
    pinned: true,
    title: "Another, Later Pinned Article",
    startDate: "2026-03-01",
  },
  {
    ...articles[0],
    pinned: true,
    title: "An Expired Pinned Article",
    endDate: "2026-03-03",
  },
  {
    id: "c51f9b8e-6c4a-4a1e-9f6e-2c0c6f9d1b17",
    startDate: "2026-03-07",
    endDate: "2026-03-18",
    title: "Das Hohelied der Larmoyanz on YouTube",
    pinned: true,
    youtube:
      '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/qUmVqeobJ5k?si=LK_yy6cIDDG0wmuK" title="Das Hohelied der Larmoyanz on YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    paragraphs: [
      [
        {
          type: "h2",
          text: 'Taken from the forthcoming album "The Time Machine"',
        },
        {
          type: "span",
          text: "Out April 10th 2026<br>on Holy Goat Records",
        },
      ],
      [
        {
          type: "span",
          text: "Lyrics: Jan Off<br>Music: Accion Mutante",
        },
      ],
    ],
  },
];
