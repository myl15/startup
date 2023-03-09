console.log("before");
setPlayerName();
console.log('after');

function getPlayerName() {
    //console.log("rawr");
    return localStorage.getItem('userName') ?? 'Guest';
};

function setPlayerName() {
    /*
        Maybe you can explain to me why this html page refreshes everytime the Modal element
        goes away, I can't get the document to update the username.
    */
    var playerNameEl = document.getElementById('userHeader');
    if(playerNameEl) {
        console.log("inside");
        playerNameEl.textContent = getPlayerName();
    }
};