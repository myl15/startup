


var getItalyEl = document.getElementById("visitItaly");
getItalyEl.addEventListener("click", visitItaly);

var topFiveEl = document.getElementById("topFive");
topFiveEl.addEventListener("click", topFive);

var domesticTravelEl = document.getElementById("domesticTravel");
domesticTravelEl.addEventListener("click", domesticTravel);

let hasText = 0;

setPlayerName();
getStuff();

function displayPicture(data) {
    const containerEl = document.querySelector("#picture");
    containerEl.style.padding = "2em";
    
    //console.log(data.originator.name);
    const quoteEl = document.createElement("p");
    quoteEl.classList.add("quote");
    const authorEl = document.createElement("p");
    authorEl.classList.add("author");

    quoteEl.textContent = data.content;
    authorEl.textContent = data.originator.name;

    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
}

function getStuff() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3fdb9fefa9mshe50f9928108b33cp1caa64jsn585cd7dc336e',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    // let random = Math.floor(Math.random() * 1000);
    // random = random % 8;
    // let countryList = ['IT', 'US', 'UG', 'TW', 'ES', 'PH', 'NO', 'NP'];
    // let country = countryList[random];
    // random = Math.floor(Math.random() * 1000) % 6;
    // let categoryList = ['beach', 'forest', 'mountain', 'city', 'water', 'area'];
    // let category = categoryList[random];
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => displayPicture(response))
	.catch(err => console.error(err));
}


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

async function makeReservation() {
	const user = document.getElementById('userHeader').textContent;
    const destination = document.getElementById("destination")?.value;
    const date = document.getElementById("date")?.value;
    const numDays = document.getElementById("numDays")?.value;
    const numPeople = document.getElementById("numPeople")?.value;

    const newReservation = { user: user, destination: destination, startDate: date, numDays: numDays, numPeople: numPeople };

    try {
        const response = await fetch('/api/reservations', {
            method: 'Post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newReservation),
        });

        const reservations = await response.json();
        localStorage.setItem('reservations', JSON.stringify(reservations));

    } catch {
       updateReservationsLocal(newReservation);
    }
}

function updateReservationsLocal(newReservation) {
    let reservations = [];
    const reservationsText = localStorage.getItem('reservations');
    if (reservationsText) {
        reservations = JSON.parse(reservationsText);
    }

    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function visitItaly() {
    if (hasText >= 1) {
        removeText();
    }
    hasText++;

    var text = document.createElement("div");
    text.setAttribute('id', 'popUpText');
    text.setAttribute('width', '500px');
    text.style.padding = "20px";
    text.style.fontSize = "20px";
    text.innerHTML += "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s David and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.";
    document.getElementById("littleLine").appendChild(text);
};

function topFive() {
    if (hasText >= 1) {
        removeText();
    }
    hasText++;

    var text = document.createElement("div");
    text.setAttribute('id', 'popUpText');
    text.setAttribute('width', '500px');
    text.style.padding = "20px";
    text.style.fontSize = "20px";
    text.innerHTML += "Our Top Five Favorite Destinations are:  &#10;1. Dubai - This middle eastern oasis is the number one most popular destination in the world.  \n2. London - A beautiful city with rich history, London provides tourists plenting of exciting things to do and see.   \n3. Cancún - An oceanside paradise, Cancún is one of the most popular destinations for honeymoons and weddings in the world.   \n4. Bali - The tropical jungle and beaches of Bali are unlike anything else in the world.   \n5. Crete - With its iconic blue and white buildings, Crete provides tourists with some of the most dazzling sights anywhere.";
    document.getElementById("littleLine").appendChild(text);
};

function domesticTravel() {
    if (hasText >= 1) {
        removeText();
    }
    hasText++;

    var text = document.createElement("div");
    text.setAttribute('id', 'popUpText');
    text.setAttribute('width', '500px');
    text.style.fontSize = "20px";
    text.innerHTML += "Throughout the continental United States there are many amazing destinations for a weekend getaway or a week-long vacation.  Some of our favorite destinations include: San Francisco, New York City, Arches National Park, San Diego, Phoenix, and Orlando.  Take a look at our vacations tab to learn more!";
    document.getElementById("littleLine").appendChild(text);
};

function removeText() {
    var elementToRemove = document.getElementById('popUpText');
    elementToRemove.parentNode.removeChild(elementToRemove);
}