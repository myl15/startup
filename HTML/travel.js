var getItalyEl = document.getElementById("visitItaly");
getItalyEl.addEventListener("click", visitItaly);

var topFiveEl = document.getElementById("topFive");
topFiveEl.addEventListener("click", topFive);

var domesticTravelEl = document.getElementById("domesticTravel");
domesticTravelEl.addEventListener("click", domesticTravel);

let hasText = 0;

setPlayerName();

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