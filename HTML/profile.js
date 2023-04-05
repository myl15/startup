function getPlayerName() {
    //console.log("rawr");
    return localStorage.getItem('userName') ?? 'Guest';
};

function setPlayerName() {
    /*
        
    */
    var playerNameEl = document.getElementById('userHeader');
    if(playerNameEl) {
        // console.log("inside");
        playerNameEl.textContent = getPlayerName();
    }
};

async function loadRes() {
    let reservations = [];
    try {
        const response = await fetch('/api/reservations');
        reservations = await response.json();

        localStorage.setItem('reservations', JSON.stringify(reservations));
    } catch {
        const reservationsText = localStorage.getItem('reservations');
        if (reservationsText) {
            reservations = JSON.parse(reservationsText);
        }
    }

    displayReservations(reservations);
}

function displayReservations(reservations) {
    const tableBodyEl = document.querySelector('#reservations');

    if (reservations.legnth) {
        for (const [i, reservation] of reservations.length()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = reservation.destination;
            dateTdEl.textContent = reservation.date;
            numDaysTdEl.textContent = reservation.numDays;
            numPeopleTdEl.textConten = reservation.numPeople;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(dateTdEl);
            rowEl.appendChild(numDaysTdEl);
            rowEl.appendChild(numPeopleTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan= 4> Book a reservation under the Travel tab!</td></tr>'
    }
}

function getPlayerName() {
    //console.log("rawr");
    return localStorage.getItem('userName') ?? 'Guest';
};

function setPlayerName() {
    /*
        
    */
    var playerNameEl = document.getElementById('userName');
    if(playerNameEl) {
        // console.log("inside");
        playerNameEl.textContent = getPlayerName();
    }
};


setPlayerName();
loadRes();