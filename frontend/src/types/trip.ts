export interface Trip {
  _id: string;
  name: string;
  destination: string;
  members: string[];
  itinerary: ItineraryDay[];
  locations: Location[];
  budget: Budget;
}
export interface ItineraryDay {
  date: string;
  activities: Activity[];
}
export interface Activity {
  _id: string;
  name: string;
  locationId: string;
  votes: number;
  cost?: number;
}
export interface Location {
  _id: string;
  name: string;
  coordinates: [number, number];
  notes?: string;
  photos?: string[];
}
export interface Budget {
  estimated: number;
  actual: number;
  split: Record<string, number>;
}