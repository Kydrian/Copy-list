const express = require('express'); //importing express
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js'); //importing our routes

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));//serving static files




app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')) //serving index.html
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html')) //serving notes.html
);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) //serving index.html
});

app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`) //running server on port 3001
);