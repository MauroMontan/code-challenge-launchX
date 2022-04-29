import express, { json } from 'express';


const app = express();

app.use(json());

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`app listening on port: ${PORT} `);
});




