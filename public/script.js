// NEW LOGIC BELOW (test 3) 
// Added new website name -> https://pookiewookiedookieookiedaisystan.onrender.com

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Load state
async function loadState() {
    const res = await fetch('/state');
    const data = await res.json();

    updateUI(data.choice);
}

// Update UI
function updateUI(choice) {
    if (choice === "yes") {
        response.textContent = "🎉LFG🎉 Meet me @ 1718 N Zaragoza RD, Ste B-2, El Paso, TX 79936, United States of America. (Due to your strict schedule you'll have to reach out to me via email to determine a date and time this weekend.";
        response.style.display = "block";
    } else if (choice === "no") {
        response.textContent = "Dang idk what to say 🥀😔 🎵I STILL SEE YOUR SHADOWS IN MY ROOM...🎵";
        response.style.display = "block";
    } else {
        response.style.display = "none";
    }
}

// YES button
yesBtn.addEventListener('click', async () => {
    const res = await fetch('/choose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice: "yes" })
    });

    const data = await res.json();
    updateUI(data.choice);
});

// NO button
noBtn.addEventListener('click', async () => {
    const res = await fetch('/choose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice: "no" })
    });

    const data = await res.json();
    updateUI(data.choice);
});

// Load on start
loadState();

/*
OLD LOGIC BELOW (test 2)

const button = document.getElementById('mainButton');
const message = document.getElementById('message');

// Load state
async function loadState() {
    const res = await fetch('/state');
    const data = await res.json();

    updateUI(data.state);
}

// Update UI
function updateUI(state) {
    if (state) {
        button.textContent = "SUREEEEEEE ❤️";
        button.style.backgroundColor = "green";
        message.style.display = "block";
    } else {
        button.textContent = "NO NOW GTFO 💔";
        button.style.backgroundColor = "red";
        message.style.display = "none";
    }
}

// Toggle button
button.addEventListener('click', async () => {
    const res = await fetch('/toggle', {
        method: 'POST'
    });

    const data = await res.json();
    updateUI(data.state);
});
*/

// Load on start
loadState();

/* OLD LOGIC BELOW (test 1)
const button = document.getElementById('mainButton');

// loading state
async function loadState() {
    const res = await fetch('/state');
    const data = await res.json();

    updateButton(data.state);
}

// updating user interface
function updateButton(state){
    if (state){
        button.textContent = "IT IS ON GNOMIE";
        button.style.backgroundColor = "green";
    } else{
        button.textContent = "IT IS OFF GNOMIE";
        button.style.backgroundColor = "red";    
    }
}

// clicking event
button.addEventListener('click', async () => {
    const currentState = button.textContent === "ON";
    const newState = !currentState;

    await fetch('/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ state: newState})
    });

    updateButton(newState);
});

// initial start-up
loadState();
*/