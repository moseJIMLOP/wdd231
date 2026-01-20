const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.table(data.prophets); 
    displayProphets(data.prophets);

  } catch (error) {
    console.error('Error fetching the data:', error);
  }
};


getProphetData();
