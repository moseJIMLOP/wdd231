const spotlightContainer = document.querySelector("#spotlight-container");
const url = "data/members.json";

async function displaySpotlights() {
  const response = await fetch(url);
  const members = await response.json();


  const filtered = members.filter(member => member.membership === 2 || member.membership === 3);


  const randomMembers = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  randomMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo">
      <p>${member.address}</p>
      <p>${member.phone || "Phone: N/A"}</p>
      <p>Membership Level: ${member.membership === 2 ? "Silver" : "Gold"}</p>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

displaySpotlights();
