// ===== Product Array =====
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ===== Populate Product Select Options =====
const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;       // value = product id
    option.textContent = product.name; // display name
    productSelect.appendChild(option);
});

// ===== Footer: Dynamic Year & Last Modified =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// ===== LocalStorage: Review Count =====
const reviewCountKey = "reviewCount";

// Increment review count on review.html load
window.addEventListener("DOMContentLoaded", () => {
    // Get current count
    let count = localStorage.getItem(reviewCountKey);
    count = count ? parseInt(count) : 0;
    count++;
    localStorage.setItem(reviewCountKey, count);
    console.log(`Total reviews submitted: ${count}`);
});