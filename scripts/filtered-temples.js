// ===== filtered-temples.js =====

// Temple array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 15",
    area: 55000,
    imageUrl:
      "https://example.com/rome-temple.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "2021, October, 10",
    area: 7800,
    imageUrl:
      "https://example.com/tokyo-temple.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2002, June, 25",
    area: 120000,
    imageUrl:
      "https://example.com/paris-temple.jpg"
  }
];

// ===== Select main container and create cards container =====
const main = document.getElementById('temple-cards');

// Keep the existing <h1> and append cards inside a new div
let cardsContainer = document.createElement('div');
cardsContainer.id = 'cards-container';
cardsContainer.style.display = 'grid';
cardsContainer.style.gap = '1rem';
main.appendChild(cardsContainer);

// ===== Function to create temple card =====
function createTempleCard(temple) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  figure.appendChild(img);

  const figcaption = document.createElement('figcaption');
  figcaption.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;
  figure.appendChild(figcaption);

  return figure;
}

// ===== Function to render temples array =====
function renderTemples(filteredTemples) {
  cardsContainer.innerHTML = ''; // clear previous cards
  filteredTemples.forEach(temple => {
    cardsContainer.appendChild(createTempleCard(temple));
  });
}

// ===== Initial render: all temples =====
renderTemples(temples);

// ===== Filter functions =====
function filterOld() {
  const oldTemples = temples.filter(t => {
    const year = parseInt(t.dedicated.split(',')[0]);
    return year < 1900;
  });
  renderTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(t => {
    const year = parseInt(t.dedicated.split(',')[0]);
    return year > 2000;
  });
  renderTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(t => t.area > 90000);
  renderTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(t => t.area < 10000);
  renderTemples(smallTemples);
}

function showAll() {
  renderTemples(temples);
}

// ===== Connect nav links =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const text = link.textContent.toLowerCase();
    if (text === 'home') showAll();
    if (text === 'old') filterOld();
    if (text === 'new') filterNew();
    if (text === 'large') filterLarge();
    if (text === 'small') filterSmall();
  });
});

// ===== Footer dynamic year and last modified =====
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;