import { places } from "../data/discover.mjs";

const container = document.getElementById(".discover-grid");
places.forEach(place => {
    const card = document.createElement("section");
    card.classList.add("discover-card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button> Learn More</button>
    `;

    container.appendChild(card);
});