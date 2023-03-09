// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };
// console.log(JSON.stringify(elts));
// const texts = ["Travel", "Culture", "Change", "YOU"];

// const morphTime = 1.5;
// const cooldownTime = 1;


// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;

//     let fraction = morph / morphTime;

//     if (fraction > 1) {
//         cooldown = cooldownTime;
//         fraction = 1;
//     }

//     setMorph(fraction);
// }

// function setMorph(fraction) {
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
//     morph = 0;

//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";

//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }

// function animate() {
//     requestAnimationFrame(animate);

//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1000;
//     time = newTime;

//     cooldown -= dt;

//     if (cooldown <= 0) {
//         if (shouldIncrementIndex) {
//             textIndex++;
//         }

//         doMorph();
//     } else {
//         doCooldown();
//     }
// }

// animate();
//login();
//setPlayerName();
// var submitBoy = document.getElementById('submitLogin');
// if (submitBoy) {
//     submitBoy.addEventListener('click', login);
// }
var globe = document.getElementById("globe");
globe.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "#C35CFF";
    event.target.style.fontWeight = "bolder";
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
      event.target.style.fontWeight = "";
    }, 500);
  },
  false
);
function login() {
    console.log("yes");
    const nameEl = document.querySelector('#userName');
    localStorage.setItem("username", nameEl.value);
    window.location.href = "home.html";
    setPlayerName();
    x++;
}

function getPlayerName() {
    console.log("rawr");
    return localStorage.getItem('username') ?? 'Guest';
};

function setPlayerName() {
    const playerNameEl = document.getElementById('test');
    playerNameEl.textContent = this.getPlayerName();
};