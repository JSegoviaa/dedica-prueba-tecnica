export interface Location {
  id: string;
  name: string;
  dimension: string;
  type: string;
  created: string;
  residents: Resident[];
}

interface Resident {
  id: string;
  name: string;
  status: string;
  image: string;
}
