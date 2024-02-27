interface Character {
  results: {
    id: number;
    name: string;
    image: string;
  }[];
}

export interface Response {
  characters: Character;
}
