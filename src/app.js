import express, { json } from 'express';
import { Students } from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(json());
app.use('/students', Students);


app.get('/', (_, res) => {
    res.send('visual partner-ship api code challenge :D');
});

app.listen(PORT, () => {

    console.log(`app listening on port: ${PORT} `);
});



