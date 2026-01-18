const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'data.json');

// Helper to read data
const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

// Helper to write data
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all items
app.get('/api/items', (req, res) => {
  const data = readData();
  res.json(data.items);
});

// GET single item
app.get('/api/items/:id', (req, res) => {
  const data = readData();
  const item = data.items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// POST new item
app.post('/api/items', (req, res) => {
  const data = readData();
  const newItem = {
    id: data.items.length > 0 ? Math.max(...data.items.map(i => i.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  data.items.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
