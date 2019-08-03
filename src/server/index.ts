import Express from "express";
const path = require('path');

const app = Express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
