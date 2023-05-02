import express from "express";
import { getBeersController, postBeerController } from './api/controllers';

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', getBeersController);

app.post('/beer', postBeerController);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
