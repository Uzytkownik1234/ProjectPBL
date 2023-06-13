const fetch = require('isomorphic-fetch');
const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const API = process.env.API_KEY;


app.use(cors());

app.use(express.json());

app.use(express.static(__dirname));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/get-message', async (req, res) => {
  const inputContent = req.body.input;

  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [{ 'role': 'user', 'content': 'Zachowaj się jak Książka kucharska. Podaj nazwę i przepis na ' + inputContent }]
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    res.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});