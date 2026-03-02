export interface Band {
  name: string;
  url?: string;
}

export interface Location {
  name: string;
  url?: string;
  city: string;
  country: string;
}

export interface Gig {
  title: string;
  image: string;
  date: string;
  location: Location;
  timeOpen: string;
  timeStart: string;
  description: string;
  bands: Band[];
}