const express = require('express');
const path = require('path');
const cors = require('cors'); 

const app = express();
const port = 8080;

app.use(cors()); 

app.use(express.static(path.join(__dirname, 'public')));


app.get('/laudo.pdf', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'laudo.pdf');
  res.sendFile(filePath);
});
  

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
