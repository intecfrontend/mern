const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:0pSHR5aj32LLeYgI@cluster0.lcdamkf.mongodb.net/?retryWrites=true&w=majority');
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await User.create({
    username, password
  });

  res.json(userDoc);
});

app.listen(4010);

// 0pSHR5aj32LLeYgI
// mongodb+srv://blog:0pSHR5aj32LLeYgI@cluster0.lcdamkf.mongodb.net/?retryWrites=true&w=majority