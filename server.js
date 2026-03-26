const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// GLOBAL STATE (persists while server is running)
//let buttonState = false;

// New State (null, yes, no)
let choice = null;

// Get current choice
app.get('/state', (req, res) => {
    res.json({ choice });
});

// Toggle state
app.post('/choose', (req, res) => {
    //buttonState = !buttonState;
    choice = req.body.choice; // can be yeer or naur
    res.json({ choice });
});

// OPTIONAL: reset (only you can call manually)
app.post('/reset', (req, res) => {
    choice = null; //buttonState = false;
    res.json({ choice });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/*
old logic below

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 42918 //3000;

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
*/