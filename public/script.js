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