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

    if (reservations.length) {
		//console.log(reservations.length);
        reservations.forEach(function(item, index) {
			console.log(item.user);
			console.log(document.getElementById('userName').textContent);
			if (item.user === document.getElementById('userName').textContent) {
			
				const nameTdEl = document.createElement('td');
				console.log(item.destination);
				const dateTdEl = document.createElement('td');
				const numDaysTdEl = document.createElement('td');
				const numPeopleTdEl = document.createElement('td');
				

			
				nameTdEl.textContent = item.destination;
				dateTdEl.textContent = item.startDate;
				numDaysTdEl.textContent = item.numDays;
				numPeopleTdEl.textContent = item.numPeople;

				const rowEl = document.createElement('tr');
				
				rowEl.appendChild(nameTdEl);
				rowEl.appendChild(dateTdEl);
				rowEl.appendChild(numDaysTdEl);
				rowEl.appendChild(numPeopleTdEl);

				tableBodyEl.appendChild(rowEl);
			}
        });
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