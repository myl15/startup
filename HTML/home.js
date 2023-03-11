var globe = document.getElementById("globe");
globe.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "grey";
    event.target.style.fontWeight = "800";
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
      event.target.style.fontWeight = "";
    }, 500);
  },
  false
);
function login() {
    //console.log("yes");
    const nameEl = document.querySelector('#userName');
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "travel.html";
}


