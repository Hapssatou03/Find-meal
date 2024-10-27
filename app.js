
"use strict"
//Affectation des variables

const serachBtn = document.querySelector('.search-btn');
const mealList = document.querySelector('#meal');
const mealDetailContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

// event listnners

serachBtn.addEventListener('click', getMealList);

// funtion get meal list that matches with the ingredients

function getMealList() {
  let searchInputText = document.querySelector('#search-input').value.trim()
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
  .then(response => response.json())
  .then(data => {
      //création de la variable card
      let html = ""
      if (data.meals) {
        data.meals.forEach(meal=> {
          html += `
                    <div class="meal-item">
                        <div class="meal-img">
                        <img src="${meal.strMealThumb} "alt="meal">
                        </div>
                        <div class="meal-name">
                           <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                 `
        })
      }else{
        html = " Sorry !! We didn't fond any maeal"
        mealList.classList.add('notfound')
       }
      mealList.innerHTML = html;
  })
}

