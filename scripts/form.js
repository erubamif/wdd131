// ===== Product Array =====
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ===== Populate Product Select Options =====
const productSelect = document.getElementById("productName"); // assume <select id="productName">
if (productSelect) {
  // Create a placeholder option first
  const placeholderOption = document.createElement("option");
  placeholderOption.textContent = "Select a Product ...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  productSelect.appendChild(placeholderOption);

  // Loop through products array and create options
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;   // value = product ID
    option.textContent = product.name; // display = product name
    productSelect.appendChild(option);
  });
}

// ===== Track Review Submissions in localStorage =====
const reviewCountKey = "reviewCount";

// Retrieve current count from localStorage
let currentCount = localStorage.getItem(reviewCountKey);
currentCount = currentCount ? parseInt(currentCount, 10) : 0;

// Increment the count
currentCount++;

// Save updated count back to localStorage
localStorage.setItem(reviewCountKey, currentCount);

// Optionally, display the number of reviews completed
const reviewCounterDisplay = document.getElementById("reviewCountDisplay"); 
if (reviewCounterDisplay) {
  reviewCounterDisplay.textContent = `Reviews completed: ${currentCount}`;
}