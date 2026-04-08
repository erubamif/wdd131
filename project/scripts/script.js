// =========================
// RECIPE DATA (Objects + Arrays)
// =========================
const recipes = [
    {
        name: "Jollof Rice",
        type: "rice",
        description: "A spicy tomato-based rice dish loved across Nigeria.",
        ingredients: ["Rice", "Tomato", "Pepper", "Onions", "Spices"],
        steps: [
            "Blend tomatoes and peppers.",
            "Fry the mixture with onions and spices.",
            "Add rice and cook until soft."
        ]
    },
    {
        name: "Egusi Soup",
        type: "soup",
        description: "A rich soup made with melon seeds and vegetables.",
        ingredients: ["Egusi", "Vegetables", "Palm oil", "Meat", "Spices"],
        steps: [
            "Cook meat with spices.",
            "Add ground egusi and palm oil.",
            "Add vegetables and simmer."
        ]
    },
    {
        name: "Pounded Yam",
        type: "swallow",
        description: "Smooth yam dough served with soup.",
        ingredients: ["Yam", "Water"],
        steps: [
            "Boil yam until soft.",
            "Pound or blend until smooth.",
            "Serve with soup."
        ]
    }
];

// =========================
// HOME PAGE FUNCTIONS
// =========================
function displayRecipe(recipe) {
    const container = document.getElementById("featured-recipe");

    const html = `
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
    `;

    container.innerHTML = html;
}

function getRandomRecipe() {
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index];
}

function saveLastRecipe(recipe) {
    localStorage.setItem("lastRecipe", JSON.stringify(recipe));
}

function loadLastRecipe() {
    const saved = localStorage.getItem("lastRecipe");
    return saved ? JSON.parse(saved) : null;
}

// =========================
// RECIPES PAGE FUNCTIONS
// =========================
function displayRecipes(recipeArray) {
    const container = document.getElementById("recipe-list");
    if (!container) return;

    const html = recipeArray.map(recipe => `
        <div class="recipe-card">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>

            <h4>Ingredients:</h4>
            <ul>
                ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h4>Instructions:</h4>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
        </div>
    `).join("");

    container.innerHTML = html;
}

function filterRecipes(type) {
    let filtered;

    if (type === "all") {
        filtered = recipes;
    } else {
        filtered = recipes.filter(recipe => recipe.type === type);
    }

    displayRecipes(filtered);
}

// =========================
// CONTACT FORM FUNCTIONS
// =========================
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value.trim();

    // Validation (Conditional Logic)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    // Object
    const formData = { name, email, type, message };

    // Array + localStorage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(formData);
    localStorage.setItem("messages", JSON.stringify(messages));

    // DOM update
    document.getElementById("form-response").textContent =
        `Thank you, ${name}! Your message has been received.`;

    document.getElementById("contact-form").reset();
}

// =========================
// PAGE INITIALIZATION
// =========================
document.addEventListener("DOMContentLoaded", () => {

    // HOME PAGE
    const featured = document.getElementById("featured-recipe");
    if (featured) {
        let recipe = loadLastRecipe();
        if (!recipe) recipe = getRandomRecipe();

        displayRecipe(recipe);

        document.getElementById("new-recipe-btn").addEventListener("click", () => {
            const newRecipe = getRandomRecipe();
            displayRecipe(newRecipe);
            saveLastRecipe(newRecipe);
        });
    }

    // RECIPES PAGE
    if (document.getElementById("recipe-list")) {
        displayRecipes(recipes);
    }

    // CONTACT PAGE
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});