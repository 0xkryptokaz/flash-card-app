const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors')



const app = express();
app.use(cors())

const db = new sqlite3.Database('flashcards.db');

app.get('/', (req, res) => {
  db.all('SELECT term, definition FROM flashcards', (err, rows) => {
    if (err) {
      res.send({ error: 'An error occurred' });
    } else {
      res.send({ words: rows });
    }
  });
});



app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

