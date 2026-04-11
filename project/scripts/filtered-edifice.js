const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
});




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
    templeName: "ivory coast",
    location: "abidjan",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "free south africa",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
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
	templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2007, September, 23",
    area: 10500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  

  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "2015, May, 17",
    area: 10500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"

  },
  {
	templeName: "Colonia-Juárez Chihuahua Mexico",
	location: "Colonia-Juárez, Chihuahua, Mexico",
	dedicated: "1999, March, 6",
	area: 10500,
	imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	}
];
createTempleCard();
function createTempleCard() {
  
  // Target the container in your HTML
  const container = document.querySelector("#temple-container");

    temples.forEach(temples => {
    // 1. Create the <section> card
    let card = document.createElement("section");
    card.classList.add("temple-card");

    // 2. Create the Heading (Name)
    let name = document.createElement("h3");
    name.textContent = temples.templeName;

    // 3. Create the Location Info
    let location = document.createElement("p");
    location.innerHTML = `<span>Location:</span> ${temples.location}`;

    // 4. Create the Dedication Info
    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedicated:</span> ${temples.dedicated}`;

    // 4. Create the Dedication Info
    let area = document.createElement("p");
    area.innerHTML = `<span>Area:</span> ${temples.area}sq ft`;

    // 5. Create the Image
    let img = document.createElement("img");
    img.setAttribute("src", temples.imageUrl);
    img.setAttribute("alt", `${temples.templeName} Temple`);
    img.setAttribute("loading", "lazy"); // Performance boost
    img.setAttribute("width", "400");    // Standard sizing
    img.setAttribute("height", "250");

    // 6. Assemble the card (The Order Matters!)
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    // 7. Add the finished card to the container on the page
    container.appendChild(card);
  });
};
  

const currentYear = new Date().getFullYear();
// inject into the element
document.getElementById("year").textContent = currentYear;
// select the element and update it text
// get current year
document.getElementById("lastModified").textContent = document.lastModified;
