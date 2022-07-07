const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3001;
const favRouter = require('./routes/favRouter')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/favourite', favRouter);
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
