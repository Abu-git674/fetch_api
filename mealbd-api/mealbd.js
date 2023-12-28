const searchFood = () => {
  const searchFood = document.getElementById("search-field");
  const searchText = searchFood.value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
  searchFood.value = "";
};

const displayData = (meals) => {
  const divRow = document.getElementById("food-container");
  divRow.innerHTML = "";
  if (meals && Array.isArray(meals)) {
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("col-lg-4");

      div.innerHTML = `
    <div class=" card inner-foodArea">
     <img src="${meal.strMealThumb}" class="card-img-top" style="max-width: 100%; height: 45%;" alt="card image">
      <div class="card-body">
      <h5 class="card-title text-secondary fw-bold text-center">${meal.strMeal}</h5>
      <p class="card-text text-secondary" style="max-height: 200px; overflow-y: auto;">${meal.strInstructions}</p>
      </div>
    </div>
    `;
      divRow.appendChild(div);
    });
  } else {
    console.error('The "meals" array is either undefined or not an array.');
  }
};
