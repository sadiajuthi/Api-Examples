const searchFood = () => {
    const searchField = document.getElementById('input-area');
    const searchText = searchField.value;

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML=''
    searchResult.textContent = ''
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                 <img height='300px' src="${meal.strMealThumb}"   class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${meal.strMeal}
                    </h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>`
        searchResult.appendChild(div)
    })
}

const loadMealDetail = mealId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal)
    const mealDetailDiv = document.getElementById('meal-detail');
    mealDetailDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
  <img height='500px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 450)}.</p>
    <p class="card-text"><small class="text-muted">"></small></p>
</div>`
    mealDetailDiv.appendChild(div)

}