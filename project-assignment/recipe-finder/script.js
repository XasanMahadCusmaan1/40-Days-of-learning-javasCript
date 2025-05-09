// Dummy Data
const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon.",
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes.",
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill.",
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce.",
  },
];

const recipeSearch = document.getElementById("recipe_search");
const recipeList = document.getElementById("recipe_list");
const clearBtn = document.getElementById("clearBtn");
const noRecipeEl = document.getElementById("no-recipe-found");

function loadRecipes() {
  // each recipe create element and appent to recipe list container
  recipes.forEach((rec) => {
    let details = document.createElement("details");
    let summaryEl = document.createElement("summary");
    summaryEl.textContent = rec.title;

    let recipeSummaryInfo = document.createElement("div");
    recipeSummaryInfo.classList.add("recipe_info");

    let ingredients = document.createElement("p");
    ingredients.innerHTML = `<strong>Ingredients: </strong>${rec.ingredients}`;

    let instructions = document.createElement("p");
    instructions.innerHTML = `<strong>Instructions: </strong>${rec.instructions}`;

    recipeSummaryInfo.appendChild(ingredients);
    recipeSummaryInfo.appendChild(instructions);

    details.appendChild(summaryEl);
    details.appendChild(recipeSummaryInfo);
    recipeList.appendChild(details);
  });

  // defoult no recipe el hidden
  document.getElementById("no-recipe-found").style.display = "none";
}

function filterRecipes() {
  let searchValue = recipeSearch.value.toLocaleLowerCase();
  let summaryElements = document.querySelectorAll("summary");
  let match = false;

  // filter the details element based on the search input
  [...summaryElements].forEach((title) => {
    let firstWord = title.textContent.split(" ")[0].toLocaleLowerCase();
    // check if the first word matches the search
    if (firstWord.includes(searchValue)) {
      title.parentElement.style.display = "block";
      // now recipe was found thats why its true
      match = true;
    } else {
      title.parentElement.style.display = "none";
    }
  });

  // no recipe found handler
  noRecipeEl.style.display =
    !match && searchValue.value !== "" ? "block" : "none";

  localStorage.setItem("lastSearchTerm", searchValue);
}

function loadLastSearch() {
  const lastSearch = localStorage.getItem("lastSearchTerm");
  if (lastSearch) {
    recipeSearch.value = lastSearch;
    filterRecipes();
  }
}
recipeSearch.addEventListener("keyup", filterRecipes);

clearBtn.addEventListener("click", () => {
  recipeSearch.value = "";
  filterRecipes();
  localStorage.removeItem("lastSearchTerm");
});

loadRecipes();
loadLastSearch();
