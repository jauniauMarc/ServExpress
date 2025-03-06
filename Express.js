const express = require('express')
const app = express()
const port = 3000


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'requete ok ' });
  });
  
app.post('/', (req, res) => {
  const receivedData = req.body;
  res.json({ received: receivedData });
});

app.listen(3000, () => {
    console.log('Serveur Express en écoute sur le port 3000');
  });
  