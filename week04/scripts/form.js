const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  }
];
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name; // Value is the product name as requested
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

  });


  // 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ Increment the number of visits by 1
numVisits++;

// 5️⃣ Store the updated visit count in localStorage
window.localStorage.setItem("numVisits-ls", numVisits);







  // get current year
const currentYear = new Date().getFullYear();
// inject into the element
document.getElementById("year").textContent = currentYear;
// select the element and update it text
document.getElementById("lastModified").textContent = document.lastModified;
