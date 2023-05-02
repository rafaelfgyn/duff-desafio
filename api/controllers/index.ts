import { getBeer, postBeer } from '../services';

export const getBeersController = (req, res) => {

  const temperature = req.body.temperature;

  const payload = getBeer(temperature);

  res.json(payload);
};

export const postBeerController = (req, res) => {

  const newBeer = req.body;

  const payload = postBeer(newBeer);

  res.json(payload);
};