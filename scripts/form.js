// scripts/form.js

// Product array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select dropdown
const productSelect = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id; // use id for value
  option.textContent = product.name; // display name
  productSelect.appendChild(option);
});

// LocalStorage review counter
const reviewCounterKey = "reviewCount";

// Increment review counter when review.html loads
function incrementReviewCounter() {
  let count = parseInt(localStorage.getItem(reviewCounterKey)) || 0;
  count += 1;
  localStorage.setItem(reviewCounterKey, count);
}

// Only increment if this page is review.html
if (window.location.pathname.endsWith("review.html")) {
  incrementReviewCounter();
}

// Optional: highlight selected stars for rating
const ratingRadios = document.querySelectorAll('input[name="rating"]');
ratingRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    ratingRadios.forEach(r => {
      const label = document.querySelector(`label[for="${r.id}"]`);
      if (r.checked) {
        label.style.color = "gold"; // selected star
      } else {
        label.style.color = ""; // reset unselected
      }
    });
  });
});

// Optional: footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;