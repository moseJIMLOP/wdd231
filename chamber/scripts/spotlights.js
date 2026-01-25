const spotlightContainer = document.querySelector("#spotlight-container");
const membersURL = "data/members.json";

async function getSpotlights() {
  const response = await fetch(membersURL);
  const data = await response.json();

  const eligibleMembers = data.members.filter(member =>
    member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );

  const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(member => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.logo}" alt="${member.name} logo">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>Membership Level: ${member.membershipLevel}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

getSpotlights();

const url = "data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data);
}

getMembers();

function displaySpotlights(members) {
    const container = document.querySelector("#spotlight-container");

    const filtered = members.filter(
    member => member.membership === 2 || member.membership === 3
  );

 const randomMembers = filtered.sort(() => 0.5 - Math.random()).slice(0, 2);

  randomMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name}">
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit website</a>
    `;
    container.appendChild(card);
    });
}  
