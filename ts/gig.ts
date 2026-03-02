import { Band } from "./band";
import { Location } from "./location";

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