const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'garageparrot'
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());

// Route pour recevoir les données du formulaire
app.post('/api/form', (req, res) => {
  const { title, description } = req.body;

  const query = 'INSERT INTO comments (title, message) VALUES (?, ?)';
  connection.query(query, [title, description], (err, result) => {
    if (err) {
      console.error('Failed to save comment', err);
      res.sendStatus(500);
    } else {
      console.log('Comment saved');
      res.sendStatus(200);
    }
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
