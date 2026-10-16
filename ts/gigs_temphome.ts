export interface gig {
  title: string;
  image: string;
  date: string; // entweder als string oder als date-picker mit ausgabe: YYYY-MM-DD
  location: string;
  timeDoorsOpen: string; // string im format: HH:MM
  timeStart: string; // string im format: HH:MM
  address: string[];
  description: string;
  link?: string;
}

export interface gigs {
  gigs: gig[];
}