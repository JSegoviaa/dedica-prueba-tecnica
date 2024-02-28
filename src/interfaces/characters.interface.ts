export interface Response {
  characters: Results;
}

interface Results {
  results: Character[];
}

interface Character {
  id: number;
  name: string;
  image: string;
}
