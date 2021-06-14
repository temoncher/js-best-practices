const allBurgerRecipes = [
  /* 1 */['🍞', '🥬', '🥓', '🧀', '🥩', '🍅', '🍞'], // "Classic" burger
  /* 2 */['🍞', '🌶', '🧀', '🥩', '🍅', '🍞'], // "Capitan Jalapeno" burger
  /* 3 */['🍞', '🧀', '🥚', '🍖', '🍅', '🍞'], // "Pig and egg" burger
  /* 4 */['🍞', '🥬', '🧀', '🍗', '🍅', '🍞'], // "Chicken" burger
  /* 5 */['🍞', '🧈', '🧀', '🍑', '🥩', '🍅', '🍞'], // "Peach breeze" burger
];
const disgustingMeat = ['🥓', '🥩', '🍖', '🍗'];

/**
 * Filters out meaty recipes
 * @param {string[][]} burgerRecipes - full burger recipe list
 * @returns {string[][]} filtered out list
 */
const filterOutMeatyRecipes = (burgerRecipes) => burgerRecipes.filter(
  (recipe) => !recipe.find(
    (ingredient) => disgustingMeat.includes(ingredient),
  ),
);

const veganBurgerRecipes = filterOutMeatyRecipes(allBurgerRecipes);

console.log(veganBurgerRecipes);
