import express, { json } from 'express';
import { Students } from './routes/index.js';

const app = express();

app.use(json());

app.use('/students', Students);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`app listening on port: ${PORT} `);
});




