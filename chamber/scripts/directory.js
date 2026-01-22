const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

const url = "data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

getMembers();

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = member.address;

    const phone = document.createElement("p");
    phone.textContent = member.phone || "Phone: N/A";

    const level = document.createElement("p");
    if (member.membership === 1) {
      level.textContent = "Membership: Member";
    } else if (member.membership === 2) {
      level.textContent = "Membership: Silver";
    } else if (member.membership === 3) {
      level.textContent = "Membership: Gold";
    }

    const link = document.createElement("a");
    link.href = member.website;
    link.textContent = "Visit Website";
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = `images/${member.image}`;
    img.alt = `${member.name} logo`;
    img.loading = "lazy";

    card.append(img, name, address, phone, level, link);
    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

const level = document.createElement("p");

if (member.membership === 1) {
  level.textContent = "Membership: Member";
} else if (member.membership === 2) {
  level.textContent = "Membership: Silver";
} else if (member.membership === 3) {
  level.textContent = "Membership: Gold";
}

card.append(img, name, address, phone, level, link);
phone.textContent = member.phone || "Phone: N/A";

