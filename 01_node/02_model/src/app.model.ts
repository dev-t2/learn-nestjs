export type CatType = {
  id: number;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: number[];
};

export const Cat: CatType[] = [
  {
    id: 1,
    name: 'blue',
    age: 8,
    species: 'Russian Blue',
    isCute: true,
    friends: [3, 5],
  },
  {
    id: 2,
    name: 'som',
    age: 4,
    species: 'Sphynx cat',
    isCute: true,
    friends: [4, 5],
  },
  {
    id: 3,
    name: 'lean',
    age: 6,
    species: 'Munchkin',
    isCute: false,
    friends: [],
  },
  {
    id: 4,
    name: 'star',
    age: 10,
    species: 'Scottish Fold',
    isCute: true,
    friends: [5],
  },
  {
    id: 5,
    name: 'red',
    age: 2,
    species: 'Sharm',
    isCute: false,
    friends: [],
  },
];
