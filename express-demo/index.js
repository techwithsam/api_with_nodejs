const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World Samuel!!!');
});

app.get('/api/courses', (req, res) => {
   res.send([1,2,3]);
});

app.listen(8000, () => console.log('Listening on port 8000...'))