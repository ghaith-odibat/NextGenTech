
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.post('/api/users', async (req, res) => {
    try {
        const { name, address, city, state, zip } = req.body;
        const newUser = new User({ name, address, city, state, zip });
        await newUser.save();
        res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error saving user data' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
