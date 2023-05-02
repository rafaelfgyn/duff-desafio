import { findClosestObject } from '../../shared';
import beers from "../db";

interface Beer {
  name: string;
  min: number;
  max: number;
}

export const postBeer = (newBeer: Beer) => {

  const beerExists = beers.find(beer => beer.name === newBeer.name);

  if (beerExists) {
    return { message: "Essa cerveja já existe no banco de dados." };
  }

  beers.push({
    ...newBeer,
    average: (newBeer.min + newBeer.max) / 2
  });

  return { message: "Nova cerveja inserida." };
};

export const getBeer = (temperature: number) => {

  const matchedBeers = findClosestObject(beers, temperature);

  return matchedBeers;
};