const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 42918 //4292018;

app.use(express.json());
app.use(express.static('public'));

// get state of button
app.get('/state', (req, res) => {
    const data = JSON.parse(fs.readFileSync('state.json'));
    res.json(data);
});

// updating button state
app.post('state', (req, res) => {
    const newState = req.body.state;
    fs.writeFileSync('state.json', JSON.stringify({state: newState}));
    res.json({ success: true});
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});