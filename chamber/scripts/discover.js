import { places } from "../data/discover.mjs";

const container = document.querySelector(".discover-grid");

places.forEach((place, index) => {
    const card = document.createElement("section");
    card.classList.add("discover-card",`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
        <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button> Learn More</button>
    `;

    container.appendChild(card);
});

const message = document.querySelector("#visit-msg");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1){
        message.textContent = "Back so soon! Yeii!";
    } else if (daysPassed === 1) {
        message.textContent = "You last visited yesterday!";
    } else {
        message.textContent = `You last visited ${daysPassed} days ago.`;
    }
}
localStorage.setItem("lastVisit", now);
        