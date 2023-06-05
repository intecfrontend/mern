const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://benediktlantsoght:Lix3HKgReYaLiVNo@cluster0.h2gleuo.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
  res.json(res.json('test ok2'));
});
app.listen(4007);

// const express = require('express');
// const app = express();
// app.get('/register', (req, res) => {
//   const { username, password } = req.body;
//   res.json(res.json('test ok2'));
// });
// app.listen(4007);
