const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// GLOBAL STATE (persists while server is running)
let buttonState = false;

// Get state
app.get('/state', (req, res) => {
    res.json({ state: buttonState });
});

// Toggle state
app.post('/toggle', (req, res) => {
    buttonState = !buttonState;
    res.json({ state: buttonState });
});

// OPTIONAL: reset (only you can call manually)
app.post('/reset', (req, res) => {
    buttonState = false;
    res.json({ state: buttonState });
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