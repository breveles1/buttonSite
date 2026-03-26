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
        button.textContent = "ON ❤️";
        button.style.backgroundColor = "green";
        message.style.display = "block";
    } else {
        button.textContent = "OFF 💔";
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

// Load on start
loadState();

/* OLD LOGIC BELOW
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